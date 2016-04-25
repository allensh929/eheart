(function() {
    'use strict';

    angular
        .module('eheartApp')
        .controller('FrontNavbarController', FrontNavbarController);

    FrontNavbarController.$inject = ['$location', '$state', 'Auth', 'Principal', 'ENV', 'LoginService'];

    function FrontNavbarController ($location, $state, Auth, Principal, ENV, LoginService) {
        var vm = this;

        vm.navCollapsed = true;
        vm.isAuthenticated = Principal.isAuthenticated;
        //vm.inProduction = ENV === 'prod';
        //vm.login = login;
        //vm.logout = logout;
        vm.$state = $state;
        //
        //function login () {
        //    LoginService.open();
        //}
        //
        //function logout () {
        //    Auth.logout();
        //    $state.go('front-home');
        //}
    }
})();
