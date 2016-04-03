var fs = require('fs');
eval(fs.readFileSync('googleapis_integration.js') + '');

fs.readFile('client_secret.json', function processClientSecrets(err, content) {
    if (err) {
        console.log('Error loading client secret file: ' + err);
        return;
    }
    authorize(JSON.parse(content), listLabels);
});