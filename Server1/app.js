var express = require('express');
var morgan = require('morgan')
var app = express();
var port = process.env.PORT || 8080;
var client = require('twilio')('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'your_auth_token');

app.use(morgan('dev'));

app.get('/testtwilio', function (req, res) {
   client.messages.create({
       from: '+191******47',
       to: '+9181******61',
       body: "You just sent an SMS from Node.js using Twilio!"
   }).then((messsage) => console.log(message.sid));
});


app.listen(port);
console.log('Server running on port: ' + port);