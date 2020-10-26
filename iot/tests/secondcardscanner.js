var pcsc = require('pcsclite');

var pcsc = pcsc();


SELECT_CARD = Buffer.from([0x00, 0xA4, 0x04, 0x00, 0x0E, 0xD2, 0x50, 0x00, 0x00, 0x02, 0x4D, 0x46, 0x5F, 0x56, 0x49, 0x54, 0x41, 0x4C, 0x45, 0x00]);
SELECT_DIR_IDENTIFIANT = Buffer.from([0x00, 0xA4, 0x02, 0x00, 0x02, 0xD0, 0x01, 0x00])
SELECT_PROC_IDENTIFANT = Buffer.from([0x00, 0xC0, 0x00, 0x00, 0x1E])
CMD_IDANTIFIANT = Buffer.from([0x00, 0xB0, 0x00, 0x00, 0x7C]);
// ===============================================================
cmd_uid_command = Buffer.from([0x00, 0xB0, 0x00, 0x00, 0x23])

pcsc.on('reader', function(reader) {

    console.log('New reader detected', reader.name);

    reader.on('error', function(err) {
        console.log('Error(', this.name, '):', err.message);
    });

    reader.on('status', function(status) {
        console.log('Status(', this.name, '):', status);
        /* check what has changed */
        var changes = this.state ^ status.state;
        if (changes) {
            if ((changes & this.SCARD_STATE_EMPTY) && (status.state & this.SCARD_STATE_EMPTY)) {
                console.log("card removed"); /* card removed */
                reader.disconnect(reader.SCARD_LEAVE_CARD, function(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Disconnected');
                    }
                });
            } else if ((changes & this.SCARD_STATE_PRESENT) && (status.state & this.SCARD_STATE_PRESENT)) {
                console.log("card inserted"); /* card inserted */
                reader.connect({ share_mode: this.SCARD_SHARE_SHARED }, function(err, protocol) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Protocol(', reader.name, '):', protocol);
                        reader.transmit(SELECT_CARD, 255, protocol, function(err, data) {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log('Selected Data received', data);

                                // convert to an ASCII string
                                reader.transmit(SELECT_DIR_IDENTIFIANT, 255, protocol, function(err2, data2) {
                                    if (err) {
                                        console.log(err2);
                                    } else {
                                        console.log('Data received', data2);

                                        reader.transmit(SELECT_PROC_IDENTIFANT, 255, protocol, function(err3, data3) {
                                                if (err) {
                                                    console.log(err3);
                                                } else {
                                                    console.log('Data received', data3);
                                                    console.log(data3.toString("ascii"))
                                                    reader.transmit(CMD_IDANTIFIANT, 255, protocol, function(err4, data4) {
                                                        if (err4) {
                                                            console.log(err4);
                                                        } else {
                                                            console.log('Data received', data4);
                                                            // console.log(data4.toString("ascii"))
                                                            // readData(data4)
                                                            let value = Buffer.from(data4).toString("utf8").split("�")
                                                            value.pop()
                                                            value.shift()
                                                            console.log(JSON.stringify(value).replace(/\\u[0-9]{4}/gi, " ").replace(/\\b/gi, "").trim())
                                                            console.log()
                                                        }
                                                    })
                                                }
                                            })
                                            // return exit();
                                    }
                                });
                                // reader.close();
                                // pcsc.close();
                            }
                        });
                    }
                });
            }
        }
    });

    reader.on('end', function() {
        console.log('Reader', this.name, 'removed');
    });
});

pcsc.on('error', function(err) {
    console.log('PCSC error', err.message);
});

function readData(data) {
    result = "";
    console.log(data)
    for (var i = 0; i < data.length; i++) {
        console.log(data[i])
        console.log(String.fromCharCode(data[i]))
        console.log("========================")
        result += String.fromCharCode(data[i]);
    }
    console.log(result)
}