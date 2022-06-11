var Gpio = require('onoff').Gpio;
var relay = new Gpio(21, 'out');

module.exports = {
    default: function (payload) {
        switch (payload.action) {
            case 'on':
                console.log('received power on command for samsung tv');
                relay.writeSync(1);
                break;
            case 'off':
                console.log('received power off command for samsung tv');
                relay.writeSync(0);
                break;
            case 'check_state':
                console.log('checking state of samsung tv');
                var state = relay.readSync();
                var response = {state: String(state)}
                return response;
                break;
        }
    }
}