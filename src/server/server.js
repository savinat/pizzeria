
const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const uri ="mongodb://127.0.0.1:27017/";
let db;

MongoClient.connect(uri, function(err, database) {
  if (err) throw err;
  db = database.db("pizzadb");
});

app.get('/', function(req, res){
  res.send('hello world');
});
app.get('/pizzas',function (req,res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  db.collection("pizzas").find().toArray(function (mongoError, results) {
    console.log(results);
    res.send(results);
  });
});
app.get('/ingredients',function (req,res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
 
  db.collection("ingredients").find().toArray(function (mongoError, results) {
    console.log(results);
    res.send(results);
  });
});
app.listen(3000,function () {
    console.log("Server runing at http://localhost:3000/");
})
