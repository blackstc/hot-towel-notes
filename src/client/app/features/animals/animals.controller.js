(function () {
    'use strict';

    angular
        .module('app.features.animals')
        .controller('AnimalController', AnimalController);

    AnimalController.$inject = ['logger'];
    /* @ngInject */
    function AnimalController(logger) {
        var vm = this;
        vm.title = 'Animal';

        activate();

        function activate() {
            logger.info('Activated Animal View');
        }
    }
})();
