var express = require("express");
var app = express();

app.use(express.static("css")).listen(3535);