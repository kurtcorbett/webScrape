var angular = require('angular');

var app = angular.module('classifieds', []);

var classifiedsController = require('./classifieds.controller.js');
app.controller('Classifieds', classifiedsController);