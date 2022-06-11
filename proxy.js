const axios = require('axios');

module.exports = {
    request: async function(method,url,data){
        axios({
        method: method,
        url: url,
        data: data
        }).then((res)=>{
            console.log(res);
            return(res);
        })
    }
}
/*new ideas:
-rating indicator (leds from seperate pi to light up?)
-photo frame type thing to display what show it is
-only dim lights for movies?
*/
