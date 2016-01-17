var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var session = require("session")
var passport = require("passport")

var app = express()

app.use(express.static(__dirname + "/public"))