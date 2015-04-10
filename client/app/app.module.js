
// I know this is not the js way, but I like it better
var angular   = require('angular')
var router    = require('angular-ui-router');

var controller = require('./main.controller.js');


var app = angular.module('app', ['ui.router']);
app.controller('Main', controller);