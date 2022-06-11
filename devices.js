var _samsungTv = require('./devices/samsungTv.js');

module.exports = {
    samsungTv: function(body){
        return _samsungTv.default(body);
    }
}