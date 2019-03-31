var request = require('request');
require('dotenv').config();

var request_data = {
    url: '/api/sms?s=11/31/2015&e=11/31/2015',
    baseUrl:'http://localhost:3000',
    method: 'GET'
};

request(request_data, function (err, resp, response_body) {
    console.log('response', response_body, err);
});

/*
request({
    url:'https://google.com',
    method: 'GET'
}, function (err, resp, response_body) {
    console.log('response', response_body, err);
});
    */