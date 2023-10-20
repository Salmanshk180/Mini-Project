var mongoose = require('mongoose');
var express = require('express');
var mgClient = require('./server')
var app = express();
var bodyParser =  require("body-parser");
const PORT = process.env.PORT || 3001;

const session = require('express-session');
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const adminController = require('./Controllers/adminController');

app.use('/admin',adminController);

const clientController = require('./Controllers/clientController');

app.use('/client',clientController);

app.listen(PORT,()=>{
    console.log("Connected to Port "+PORT);
})