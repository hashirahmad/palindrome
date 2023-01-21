var express = require('express');

var app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res) {
	res.render('index.html');
});

app.get('/api/getScores', (req, res) => {
	throw new Error('not implemented');
});

app.post('/api/submitEntry', (req, res) => {
	throw new Error('not implemented');
});

var port = 3000;
app.listen(port, function() {
	console.log('Server', process.pid, 'listening on port', port);
});
