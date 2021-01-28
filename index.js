const express = require('express');
const ejs = require('ejs');
const Main = require('./controller/posts.js');
const Posts = require('./controller/main.js');

const app = express();

const PORT = 4000;

app.engine('html', ejs.renderFile);

app.set('view engine', 'html');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));

app.get('/', Main.GET);

app.get('/posts/:id?', Posts.GET);

app.listen(process.env.PORT || PORT, () => console.log(PORT));
