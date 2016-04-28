(function() {
    'use strict';

    angular
        .module('eheartApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('front-home', {
            parent: 'front-app',
            url: '/',
            data: {
                authorities: []
            },
            views: {
                'front-content@': {
                    templateUrl: 'app/front/main.html',
                    controller: 'FrontHomeController',
                    controllerAs: 'vm'
                },
                'front-footer@': {
                    templateUrl: 'app/front/footer.html',
                    controller: 'FrontFooterController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                    $translatePartialLoader.addPart('front-home');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
