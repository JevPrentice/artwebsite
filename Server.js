/* global sendMessage */

var fs = require('fs');
var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
require('util');

eval(fs.readFileSync('googleapis_integration.js', "utf-8").toString()); //TODO do this properly

// Configure app to use bodyParser(), this will get the data from a POST
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

function isProbablySpam(message) {
    return message.includes("It is free to sign up")
            || message.includes("and they let you try their service for free for 7 days.")
}

function getEmailLog(name, email, phone, message) {
    var datetime = new Date(new Date().getTime()).toISOString();
    return util.format('{"datetime":"%s","name":"%s","email":"%s","phone":"%s","message":"%s"}',
            datetime, name, email, phone, message);
}

function getEmailText(name, email, phone, message) {
    return 'Name: ' + name + "\nEmail: " + email + "\nPhone:" + phone + "\nMessage:" + message;
}


app.post('/contactForm', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var message = req.body.message;

    var logString = getEmailLog(name, email, phone, message);
    console.log(logString);

    fs.readFile('email.log', 'utf8', function (err, data) {
        if (err) {
            throw err;
        }

        if (data.length === 0) {
            data = "[" + logString + "]";
        } else {
            var position = data.lastIndexOf("]");
            var newValue = data.substr(0, position) + ",\n" + logString + data.substr(position);
            data = newValue;
        }
        fs.writeFile("email.log", data, "utf8", null);
    });

    // Load client secrets from a local file.
    fs.readFile('client_secret.json', function (err, content) {
        if (err) {
            console.log('Error loading client secret file: ' + err);
            return;
        }
        // Authorize a client with the loaded credentials, then call the Gmail API.
        var messageText = getEmailText(name, email, phone, message);
        authorize(JSON.parse(content), messageText, sendMessage);
    });

    /*function authorizeCallback(oauth2Client, messageText) {console.log("Authorize Callback - " + messageText);}*/
    res.sendStatus(200);
});

app.listen(80, function () {
    console.log("Exploring the unseen on Port 80");
});