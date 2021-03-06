var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
