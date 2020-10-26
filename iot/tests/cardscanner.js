'use strict';

const smartcard = require('smartcard');
const { default: CommandApdu } = require('smartcard/lib/CommandApdu');
const Devices = smartcard.Devices;
const Iso7816Application = smartcard.Iso7816Application;

const devices = new Devices();

devices.on('device-activated', event => {
    const currentDevices = event.devices;
    let device = event.device;
    console.log(`Device '${device}' activated, devices: ${currentDevices}`);
    for (let prop in currentDevices) {
        console.log("Devices: " + currentDevices[prop]);
    }

    device.on('card-inserted', event => {
        let card = event.card;
        console.log(`Card '${card.getAtr()}' inserted into '${event.device}'`);

        card.on('command-issued', event => {
            console.log(`Command '${event.command}' issued to '${event.card}' `);
        });

        card.on('response-received', event => {
            console.log(`Response '${event.response}' received from '${event.card}' in response to '${event.command}'`);
            console.log(hex2a(event.response))
            console.log(hex2a(event.command))
        });

        const application = new Iso7816Application(card);
        application.selectFile([0x3B, 0x75, 0x13, 0x00, 0x00, 0x45, 0x09, 0xEA, 0x90, 0x00])
            .then(response => {
                console.info(`Select PSE Response: '${response}' '${response.meaning()}'`);
                return application.issueCommand(new CommandApdu({ bytes: [0xBC, 0xB0, 0x00, 0x00, 0x7C] }))
            }).catch(error => {
                console.error('Error:', error, error.stack);
            });

    });
    device.on('card-removed', event => {
        console.log(`Card removed from '${event.name}' `);
    });

});

devices.on('device-deactivated', event => {
    console.log(`Device '${event.device}' deactivated, devices: [${event.devices}]`);
});

function hex2a(hexx) {
    var hex = hexx.toString(); //force conversion
    var str = '';
    for (var i = 0;
        (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}