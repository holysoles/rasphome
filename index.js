var express = require('express'),
    request = require('request'),
    multer  = require('multer'),
    cors    = require('cors');

//import local functions
var process = require('./processPayload.js');
var proxy = require('./proxy.js');
var home = require('./home.js');
var devices = require('./devices/samsungTv.js');

var app = express();
app.use(express.json());
app.use(cors());
//var corsOpts = {'origin': '*'};


//allow thumbnail upload, handle plex webhooks
var upload = multer({ dest: '/tmp/' });
app.post('/plex', upload.single('thumb'), function (req, res, next) {
//import proxy function
  var payload = JSON.parse(req.body.payload);
//call func to process
  process.func(payload);
  res.sendStatus(200);
});

app.post('/proxy', async function (req, res, next) {
  var payload = JSON.parse(JSON.stringify(req.body));
  var method = payload.method;
  var url = payload.url;
  var data = payload.data;
//call func to process
  proxy.request(method,url,data).then((res)=>{
  });
  //send response
  res.sendStatus(200);
});

app.post('/home/device', async function (req, res, next){
  var payload = JSON.parse(JSON.stringify(req.body));
  console.log(payload);
  if (payload.device == 'samsung_tv'){
    devices.samsungTv(payload);
  }

  //send response?
});

app.listen(8080);
