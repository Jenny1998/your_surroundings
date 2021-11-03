const lib = require('./lib');

lib.Configuration.key = 'a9f5c21c8e5b4658b7225650210211';
const controller = lib.APIsController;
const q = '30318';
const lang = 'lang';
controller.getRealtimeWeather(q, lang, (error, response, context) => {
    console.log('error:', error, 'response:', response, 'context: ', context);
});

const url = 'https://api.tomtom.com/traffic/services/4/flowSegmentData/relative0/10/json?point=52.41072%2C4.84239&key=SzYpTfs2ASwQ58mGyIF0GBZgLXOOP1Yd';
var XMLHttpRequest = require('xhr2');
var Http = new XMLHttpRequest();
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
}
