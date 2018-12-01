var express = require('express');
var router = express.Router();

var api_key = 'key-01981a72e91d6e717856b33af1bb9584';
var domain = 'mail.pictorpvs.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

const accountSid = 'ACefc93f82c6e3de2acc2220a081578fc2';
const authToken = 'e0c64be56d5f83da38cfdcf109cbc4b5';
var client = require('twilio')(
  accountSid,
  authToken
);


    /*
    GET Form page
    */
    router.get('/', function(req, res,next) {
      console.log("1111 1111");
      res.render('form', { uid: req.params.uid });

    });

    router.post('/sendSms', function(req, res,next) {
       console.log("sms");
       var from_number = req.body.from_number;
       var to_number = req.body.to_number;
       var message = req.body.message;
       console.log(from_number);
       console.log(to_number);
       console.log(message);
       twilioclient.messages.create({
         from: from_number,
         to: to_number,
         //body: message
         MediaUrl: message
       },
       (err, message) => {
       // console.log(message.sid);
        res.status(200).send("");
      });


   });

   router.post('/sendEmail', function(req, res,next) {
     console.log("email");

     var from = req.body.from;
     var to = req.body.to;
     var subject = req.body.subject;
     var text = req.body.text;
     console.log(from);
     console.log(to);
     console.log(subject);
     console.log(text);
     var data = {
       from: from,
       to: to,
       subject: subject,
       text: text
     };

     mailgun.messages().send(data, function (error, body) {
        console.log(body);
        res.status(200).send("");
     });

   });

module.exports = router;
//}
