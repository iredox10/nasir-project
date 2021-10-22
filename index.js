const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routes')
const ejs  = require('ejs')
const methodOverride = require('method-override')

// middlewares
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs')
app.use(routes)
mongoose
	.connect(process.env.DB_URL|| 'mongodb://localhost/nasir-project' )
	.then((result) => app.listen(process.env.PORT || 3000))
	.catch((err) => console.log(err));


