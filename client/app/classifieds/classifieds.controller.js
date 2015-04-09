(function() {
    'use strict';

    angular
        .module('app')
        .controller('Classifieds', Classifieds);

    /* @ngInject */
    function Classifieds(dependencies) {
        var vm = this;
        vm.title = 'Classifieds';

        activate();

        ////////////////

        function activate() {
        }
    }
})();