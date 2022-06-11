var Gpio = require('onoff').Gpio;
var relay = new Gpio(21, 'out');

module.exports = {
    default: function (body) {
        var response = {};
        if(!body.action){
            throw 'no action was provided';
        } else {
            switch (body.action) {
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
                    response.state = relay.readSync();
                    break;
                default:
                    response.result = 'a valid action was not provided.'
            }
        }
        return response;
    }
}