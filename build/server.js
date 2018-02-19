"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var model_1 = require("./model");
var app = express();
app.use('/', express.static(path.resolve(__dirname, 'static_resource')));
app.get('/totalevents', function (req, res) {
    res.json(model_1.getTotalEventList());
});
var server = app.listen(8000, 'localhost', function () {
    var _a = server.address(), address = _a.address, port = _a.port;
    console.log('Listening on %s %s', address, port);
});
