import { VitalScoket } from './socket';
export declare class CardVitalRead {
    pcsc: any;
    vitalSocket: VitalScoket;
    reader: any;
    constructor(ioSocket: VitalScoket);
    initMainHandler(): void;
    handleErrorReader(): void;
    handleStatusReader(): void;
    handleEndReader(): void;
    selectCardCommand(protocol: any): void;
    retreiveUserInformation(protocol: any): Promise<any>;
    retreiveVitalId(reader: any, protocol: any): Promise<any>;
}
