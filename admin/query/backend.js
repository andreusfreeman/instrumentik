var express = require('express');
var cors = require('cors');
// var bodyParse = require('body-parser');

var app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

app.use(cors());

var category = [
  {"id":"40","meta_title":"Шины для бензопил","meta_keywords":"Шины для бензопил","meta_description":"Шины для бензопил","cat_title":"Шины для бензопил","cat_description":"<p>hello</p>","public_cat":"1"},
  {"id":"41","meta_title":"Цепи для бензопил","meta_keywords":"Цепи для бензопил","meta_description":"Цепи для бензопил","cat_title":"Цепи для бензопил","cat_description":"<p>hello</p>","public_cat":"1"},
  {"id":"43","meta_title":"Запчасти к бетономешалкам Altrad Liv","meta_keywords":"Запчасти к бетономешалкам Altrad Liv","meta_description":"Запчасти к бетономешалкам Altrad Liv","cat_title":"Запчасти к бетономешалкам Altrad Liv","cat_description":"<p>hello</p>","public_cat":"1"}
];

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
