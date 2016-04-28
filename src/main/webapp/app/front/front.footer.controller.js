(function() {
    'use strict';

    angular
        .module('eheartApp')
        .controller('FrontFooterController', FrontFooterController);

    FrontFooterController.$inject = ['$scope', 'Principal', 'LoginService'];

    function FrontFooterController ($scope, Principal, LoginService) {
        var vm = this;
        console.debug('FrontFooterController start');

    }

})();
