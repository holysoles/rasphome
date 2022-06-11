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
                    response.code = 200;
                    response.message = 'Samsung TV powered on.';
                    break;
                case 'off':
                    console.log('received power off command for samsung tv');
                    relay.writeSync(0);
                    response.code = 200;
                    response.message = 'Samsung TV powered off.';
                    break;
                case 'check_state':
                    console.log('checking state of samsung tv');
                    response.state = relay.readSync();
                    response.code = 200;
                    response.message = 'successfully checked state.'
                    break;
                default:
                    response.code = 400;
                    response.message = 'a valid action was not provided.'
            }
        }
        return response;
    }
}