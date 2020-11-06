//@ts-expect-error
import * as pcsclite from 'pcsclite';
import { VitalScoket } from './socket';


const SELECT_CARD = Buffer.from([0x00, 0xA4, 0x04, 0x00, 0x0E, 0xD2, 0x50, 0x00, 0x00, 0x02, 0x4D, 0x46, 0x5F, 0x56, 0x49, 0x54, 0x41, 0x4C, 0x45, 0x00]);
const SELECT_DIR_IDENTIFIANT = Buffer.from([0x00, 0xA4, 0x02, 0x00, 0x02, 0xD0, 0x01, 0x00])
const SELECT_PROC_IDENTIFANT = Buffer.from([0x00, 0xC0, 0x00, 0x00, 0x1E])
const CMD_IDANTIFIANT = Buffer.from([0x00, 0xB0, 0x00, 0x00, 0x7C]);

export class CardVitalRead {
    
    pcsc: any 
    vitalSocket: VitalScoket
    reader: any

    constructor(ioSocket: VitalScoket){
         this.pcsc = pcsclite();
         this.vitalSocket = ioSocket
        // tslint:disable-next-line: no-floating-promises
        this.initMainHandler()
    }

    initMainHandler(){

        this.pcsc.on('reader', (reader: any)  =>{
            this.reader = reader
            this.handleStatusReader()
            this.handleErrorReader()
            this.handleEndReader()
        })

        this.pcsc.on('error', (err: any)=> {
            console.log('PCSC error', err.message);
        });
    }

    handleErrorReader(){
        this.reader.on('error', (err: any)=> {
            console.log('Error(', this.reader.name, '):', err.message);
        });
    }

    handleStatusReader(){
        this.reader.on('status', (status: any) => {
            console.log('Status(', this.reader.name, '):', status);
            /* check what has changed */
            const changes =  this.reader.state ^ status.state;
            if (changes) {
                if ((changes & this.reader.SCARD_STATE_EMPTY) && (status.state & this.reader.SCARD_STATE_EMPTY)) {
                    console.log("card removed"); /* card removed */
                    this.reader.disconnect(this.reader.SCARD_LEAVE_CARD, (err:any) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('Disconnected');
                        }
                    });
                } else if ((changes & this.reader.SCARD_STATE_PRESENT) && (status.state & this.reader.SCARD_STATE_PRESENT)) {
                    console.log("card inserted"); /* card inserted */
                    this.reader.connect({ share_mode: this.reader.SCARD_SHARE_SHARED }, (err: any, protocol: any) =>{
                        if (err)
                            throw new Error(err);

                        console.log('Protocol(', this.reader.name, '):', protocol);
    
                        this.selectCardCommand(protocol)
                    })
                }
            }
        })
    }

    handleEndReader(){
        this.reader.on('end', ()=> {
            console.log('Reader', this.reader.name, 'removed');
        });
    }
    
    selectCardCommand(protocol: any){
        this.reader.transmit(SELECT_CARD, 255, protocol, (err: any, data: any) =>{
            if(err)
                throw new Error(err);
            
            console.log("data ",data)
            oldCallReteiveUserInfo(this.reader, protocol).then((response)=>console.log("data done : ",response)).catch(e=>console.error(e))
            // this.retreiveUserInformation(protocol).then((response)=>console.log("data done : ",response)).catch(e=>console.error(e))
        })
    }


    async retreiveUserInformation(protocol: any): Promise<any>{
        const reader = this.reader
        try {
            const data1: any = await wrapperCommandReader(reader, SELECT_DIR_IDENTIFIANT, 255, protocol);
            console.log("data1 ",Buffer.from(data1).toString("utf8"));
            const data2: any = await wrapperCommandReader(reader, SELECT_PROC_IDENTIFANT, 255, protocol);
            console.log("data2 ",Buffer.from(data2).toString("utf8"));
            const data3: any = await wrapperCommandReader(reader, CMD_IDANTIFIANT, 255, protocol);
            console.log("data3 ",Buffer.from(data3).toString("utf8"))
            const value: any = Buffer.from(data3).toString("utf8").split("�")
            value.pop()
            value.shift()
            console.log(JSON.stringify(value).replace(/\\u[0-9]{4}/gi, " ").replace(/\\b/gi, "").trim())
            return JSON.stringify(value).replace(/\\u[0-9]{4}/gi, " ").replace(/\\b/gi, "").trim()
        } catch (error) {
            throw new Error(error);
        }
    }

    async retreiveVitalId(reader: any, protocol: any): Promise<any>{
        try {
            await wrapperCommandReader(reader, SELECT_DIR_IDENTIFIANT, 255, protocol)
            await wrapperCommandReader(reader, SELECT_PROC_IDENTIFANT, 255, protocol)
            const data: any = await wrapperCommandReader(reader, CMD_IDANTIFIANT, 255, protocol)
            return data
        } catch (error) {
            throw new Error(error);     
        }
    }
}

function oldCallReteiveUserInfo(reader: any, protocol: any){
    return new Promise((resolve, reject)=>{
        reader.transmit(SELECT_DIR_IDENTIFIANT, 255, protocol, (errDir: any, reponseDir: any) =>{
            if(errDir)
                reject(errDir)
            console.info("reponseDir", reponseDir)
            reader.transmit(SELECT_PROC_IDENTIFANT, 255, protocol, (errProc: any, reponseProc: any) =>{
                if(errProc)
                    reject(errProc)
                console.info("reponseProc ", reponseProc)
                reader.transmit(CMD_IDANTIFIANT, 255, protocol, (errData: any, reponseData: any) =>{
                    if(errData)
                        reject(errData)
                    console.info("reponseData ",reponseData)
                    const value: any = Buffer.from(reponseData).toString("utf8").split("�").slice(1,4).map(string =>console.log(string)/*.replace(/^\\u*{4}/, '')*/)
                    // const formatedValue = 
                    
                    resolve(value)
                })
            })
        })
    })
}



function wrapperCommandReader(reader: any, command: any, sizeBit: any, protocol: any){
    return new Promise((resolve: any, reject: any) => {
        reader.transmit(command, sizeBit, protocol, (err: any, data: any) =>{
            if(err)
                reject(err)
            resolve(data)
        })
    }) 
}