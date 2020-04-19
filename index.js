const express = require('express');
const app = express();
const path = require('path');

const port = 5000;

app.set('view engine', 'ejs');
app.set('views',  path.resolve(__dirname, 'views'));

const kunstwerkposts = require('./data/kunstwerk.json');

-
app.get('/', function(request, response){
  response.render('home');
});

app.get('/kunstwerk', function(req,res){
  res.render('kunstwerk', {
    posts: kunstwerkposts.kunstwerk
  });
});

app.get('/kunstwerk/:postid', function(req,res){
  res.render('detail', {
    post: kunstwerkposts.portfolio[req.params.postid]
  });
});

app.get('/contact', function(request, response){
  response.render('contact');
});

app.use(express.static('public'));



app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));
