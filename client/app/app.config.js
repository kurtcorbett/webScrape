var angular = require('angular')

(function() {
    'use strict';

    angular
        .module('app')
        .config(configure)

    function configure($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
      $stateProvider
        .state('state1', {
          url: "/",
          templateUrl: "./layout/state1.html"
        })
        .state('state1.list', {
          url: "/list",
          templateUrl: "./layout/state1.list.html",
          controller: function($scope) {
            $scope.items = ["A", "List", "Of", "Items"];
          }
        })
        .state('state2', {
          url: "/state2",
          templateUrl: "./layout/state2.html"
        })
        .state('state2.list', {
          url: "/list",
          templateUrl: "./layout/state2.list.html",
          controller: function($scope) {
            $scope.things = ["A", "Set", "Of", "Things"];
          }
        });

    }

})();