var fs = require('fs');
var express = require("express");
var app = express();
var router = express.Router();

var bodyParser = require('body-parser');

eval(fs.readFileSync('googleapis_integration.js', "utf-8").toString());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/", function (req, res) {
    res.sendFile("public/index.html");
});

app.post('/contactForm', function (req, res) {

    var dateLocaleString = new Date().toLocaleString();
    var logString = "Contact Form POST: dateLocaleString='" + dateLocaleString + "',name='" + req.body.name + "',email='" + req.body.email + "',phone='" + req.body.phone + "',message='" + req.body.message + "'";
    console.log("******************************\nPOST Request Recieved at /contactForm req=" + req + " res=" + res + "logString=" + logString);

    try {
        fs.readFile('email_log.log', 'utf8', function (err, data) {
            if (err) {
                console.log("fs is unable to readFile email_log.log. err=" + err + " data=" + data);
            } else {
                data += "\n" + logString;
                fs.writeFile("email_log.log", data, "utf8", null);
            }
        });
    } catch (err) {
        console.log("Error while logging to email_log.log . err=" + err + " logString=" + logString);
    }

    try {
        fs.readFile('client_secret.json', function (err, data) {
            if (err) {
                console.log("fs is unable to readFile client_secret.json. err=" + err + " data=" + data);
            } else {

                try {
                    authorize(JSON.parse(data), logString, sendMessage);
                } catch (err) {
                    console.log("Error while performing googleapis integration. err=" + err + " logString=" + logString);
                }
            }
        });
    } catch (err) {
        console.log("Error while logging fs . err=" + err + " logString=" + logString);
    }

    /*function authorizeCallback(oauth2Client, messageText) {
     console.log("Authorize Callback - " + messageText);
     }*/

    res.sendStatus(200);

    console.log("******************************\nResponding to /contactForm with 200 req=" + req + " res=" + res + "logString=" + logString);

});

app.listen(80, function () {
    console.log("Live at Port 80");
});
