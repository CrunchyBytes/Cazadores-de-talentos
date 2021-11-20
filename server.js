var express = require('express');
var app = express();

app.use(express.static('Controller'));
app.use(express.static('Model'));
app.use(express.static('View'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/View/home.html');
});

app.listen(3000, function() {
  console.log("Running Express");  
});