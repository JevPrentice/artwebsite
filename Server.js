var express = require("express");
var app = express();
var router = express.Router();

app.use(express.static(__dirname + '/public'));

router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/", function (req, res) {
    res.sendFile("public/index.html");
});

app.listen(80, function () {
    console.log("Live at Port 80");
});