(function() {
    'use strict';

    angular
        .module('eheartApp')
        .controller('FrontHomeController', FrontHomeController);

    FrontHomeController.$inject = ['$scope', 'Principal', 'LoginService'];

    function FrontHomeController ($scope, Principal, LoginService) {
        var vm = this;
        console.debug('FrontHomeController start');

        //vm.account = null;
        //vm.isAuthenticated = null;
        //vm.login = LoginService.open;
        //$scope.$on('authenticationSuccess', function() {
        //    getAccount();
        //});
        //
        //getAccount();
        //
        //function getAccount() {
        //    Principal.identity().then(function(account) {
        //        vm.account = account;
        //        vm.isAuthenticated = Principal.isAuthenticated;
        //    });
        //}
    }
})();
