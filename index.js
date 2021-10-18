const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routes')
const ejs  = require('ejs')
// middlewares
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs')
app.use(routes)
mongoose
	.connect('mongodb://localhost/nasir-project')
	.then((result) => app.listen(3000))
	.catch((err) => console.log(err));


