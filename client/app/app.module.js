
// I know this is not the js way, but I like it better
var angular   = require('angular')
var router    = require('angular-ui-router');

// I am requiring in the function that I created in my main.controller.js
var controller = require('./main.controller.js');


var app = angular.module('app', ['ui.router']);

//  I am wiring up the controller into the app
app.controller('Main', controller);

//  This is the only "angular" file in your module.  The controller and services and stuff will be straight js