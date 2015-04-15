/* @ngInject */
function configure($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");
//
// Now set up the states
  $stateProvider
    .state('classifieds', {
      url: "/",
      templateUrl: "./classifieds/classifieds.html",
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

module.exports  = configure;