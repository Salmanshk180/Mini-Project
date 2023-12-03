//app.js

var mongoose = require('mongoose');
var express = require('express');
var mgClient = require('./server')
var app = express();
const path = require('path');
var bodyParser =  require("body-parser");
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const adminController = require('./Controllers/adminController');
const clientController = require('./Controllers/clientController');
const session = require('express-session');
var cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/admin',adminController);
app.use('/client',clientController);
app.set("view engine", "ejs");
app.use('/upload/images', express.static(path.join(__dirname, 'upload', 'images')));
app.use('/upload/clientImages', express.static(path.join(__dirname, 'upload', 'clientImages')));
app.use('/upload', express.static('upload/images'))
app.use('/upload', express.static('upload/clientImages'))

app.listen(PORT,()=>{
    console.log("Connected to Port "+PORT);
})