var fs = require('fs');
eval(fs.readFileSync('googleapis_integration.js') + '');

fs.readFile('client_secret.json', function processClientSecrets(err, content) {
    if (err) {
        console.log('Error loading client secret file: ' + err);
        return;
    }
    // Authorize a client with the loaded credentials, then call the Gmail API.
    var messageText = 'Sender Name: ' + name + "\nEmail: " + email + "\nPhone:" + phone + "\nMessage:" + message;
    authorize(JSON.parse(content), listLabels);
});