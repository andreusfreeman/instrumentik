var express = require('express');
var cors = require('cors');
var bodyParse = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());

// array

app.get('/thing', function(req, res){
  res.send(things);
});

app.post('/thing', function(req, res) {
  things.push({
    name: req.body.name
  });
  res.send(200);
});

var server = app.listen(3001, function(){
  console.log('backend started');
});
