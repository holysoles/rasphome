const axios = require('axios');

const key = 'dO7MFvnFA0RWIHLuAiCOw9';

module.exports = {
    func: function(payload){
        //start processing payload
        //check the event type
        var event = payload.event;
        var mediaType = payload.Metadata.librarySectionType;
        if(mediaType.match('movie') && event.match('play|resume')){
            console.log(payload);
            console.log('media started playing');
            if(payload.Player.title.match('LG')){
                axios.post('https://maker.ifttt.com/trigger/smart_outlet_off/with/key/'+key);
            }
        
        }
        if(mediaType.match('movie') && event.match('stop|pause')){
            console.log('media stopped playing');
           if(payload.Player.title.match('LG')){
                axios.post('https://maker.ifttt.com/trigger/smart_outlet_on/with/key/'+key);
            }
        }
    }
}
/*new ideas:
-rating indicator (leds from seperate pi to light up?)
-photo frame type thing to display what show it is
-only dim lights for movies?
*/
