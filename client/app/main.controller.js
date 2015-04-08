(function() {
    'use strict';

    angular
        .module('app')
        .controller('Main', Main);

    /* @ngInject */
    function Main($scope) {
        var vm = this;
        vm.title = 'Main';
        vm.name = "Kurt"

        activate();

        ////////////////

        function activate() {
        }
    }
})();