(function() {
    'use strict';

    angular
        .module('app.features.admin')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'animals',
                config: {
                    url: '/animals',
                    templateUrl: 'app/features/animals/animals.html',
                    controller: 'AnimalController',
                    controllerAs: 'vm',
                    title: 'Animal',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> Animal'
                    }
                }
            }
        ];
    }
})();
