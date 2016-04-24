var fs = require('fs');
var express = require("express");
var app = express();
var router = express.Router();

var bodyParser = require('body-parser');

eval(fs.readFileSync('googleapis_integration.js', "utf-8").toString()); //TODO do this properly

// configure app to use bodyParser()
// this will let us get the data from a POST
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
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var message = req.body.message;

//    console.log(name);
//    console.log(email);
//    console.log(phone);
//    console.log(message);

    var datetimeString = new Date().toLocaleString();
    var messageText = 'Sender Name: ' + name + "\nEmail: " + email + "\nPhone:" + phone + "\nMessage:" + message;

//    var emailLogFile = require("email_log.json");

    fs.readFile('email_log.json', 'utf8', function (err, data) {
        if (err)
            throw err;
        data += "\n************" + datetimeString + "\n" + messageText;
        fs.writeFile("email_log.json", data, "utf8", null);
    });

//    emailLogFile += "\n************" + datetimeString + "\n" + messageText;


    // Load client secrets from a local file.
    fs.readFile('client_secret.json', function processClientSecrets(err, content) {
        if (err) {
            console.log('Error loading client secret file: ' + err);
            return;
        }
        // Authorize a client with the loaded credentials, then call the Gmail API.

        var messageTextLocal = 'Sender Name: ' + name + "\nEmail: " + email + "\nPhone:" + phone + "\nMessage:" + message;
        ;
        authorize(JSON.parse(content), messageTextLocal, null);
    });



    res.sendStatus(200);

});

app.listen(80, function () {
    console.log("Live at Port 80");
});