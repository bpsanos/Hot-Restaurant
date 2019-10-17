// Dependancies
var express = require("express");
var path = require("path");

// Express app config
var app = express();
var port = 3000;

// data parsing config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

