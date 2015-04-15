// I know this is not the js way, but I like it better
var angular   = require('angular');
var router    = require('angular-ui-router');

require('./classifieds/classifieds.module.js');

// I am requiring in the function that I created in my main.controller.js
var mainController = require('./main.controller.js')
  , configure  = require('./app.config.js')
  , classifiedsController = require('./classifieds/classifieds.controller.js')
  , classifiedsService  = require('./services/getClassifieds.service.js')


var app = angular.module('app', [router, 'Classifieds']);

 // I am wiring up the controller into the app
// app.controller('Classifieds', classifiedsController);
app.controller('Main', mainController);
app.config(configure);
app.factory('classifiedsService', classifiedsService);

//  This is the only "angular" file in your module.  The controller and services and stuff will be straight js