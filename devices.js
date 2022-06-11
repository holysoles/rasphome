var _samsungTv = require('./devices/samsungTv.js');

module.exports = {
    samsungTv: function(payload){
        _samsungTv.default(payload);
    }
}