var express=require('express');
var app=express();
var customerController=require('../Controllers/CutomerController');

app.get('/', function (req, res) {
    res.send('Home Page');
  });

  app.post('/create', customerController.create);
  app.put('/update', customerController.update);
  app.get('/read', customerController.read);
  app.delete('/delete', customerController.delete);




app.listen(8000, '127.0.0.1', () => {console.log("listening on 8000")});