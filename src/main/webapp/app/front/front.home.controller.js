(function () {
    'use strict';

    angular
        .module('eheartApp')
        .controller('FrontHomeController', FrontHomeController);

    FrontHomeController.$inject = ['$scope', 'Principal', 'LoginService'];

    function FrontHomeController($scope, Principal, LoginService) {
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

        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;
        slides.push({
            image: '/content/images/front/environment_earth_day_large.jpg',
            style: {
                'background-image': 'url(/content/images/front/environment_earth_day_large.jpg)',
                'background-size': 'cover'
            },
            text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
            id: currIndex++
        });
        slides.push({
            image: '/content/images/front/ipad_pro_family_medium.jpg',
            style: {
                'background-image': 'url(/content/images/front/ipad_pro_family_medium.jpg)',
                'background-size': 'cover'
            },
            text: ['Nice image 2', 'cool', 'That is so cool', 'I love that'][slides.length % 4],
            id: currIndex++
        });
        slides.push({
            image: '/content/images/front/apple_watch_trio_large.jpg',
            style: {
                'background-image': 'url(/content/images/front/apple_watch_trio_large.jpg)',
                'background-size': '50% 50%',
                'background-position': '50% 50%',
                'background-repeat': 'no-repeat'
            },
            text: ['Nice image 3', 'cool', 'That is so cool', 'I love that'][slides.length % 4],
            id: currIndex++
        });

        //$scope.addSlide = function() {
        //    var newWidth = 600 + slides.length + 1;
        //    slides.push({
        //        image: '/content/images/front/ipad2.png',
        //        text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
        //        id: currIndex++
        //    });
        //    slides.push({
        //        image: '/content/images/front/ipad2.png',
        //        text: ['Nice image 2','cool','That is so cool','I love that'][slides.length % 4],
        //        id: currIndex++
        //    });
        //};
        //
        //$scope.randomize = function() {
        //    var indexes = generateIndexesArray();
        //    assignNewIndexesToSlides(indexes);
        //};
        //
        //for (var i = 0; i < 4; i++) {
        //    $scope.addSlide();
        //    console.debug('add slide ');
        //}
        //
        //// Randomize logic below
        //
        //function assignNewIndexesToSlides(indexes) {
        //    for (var i = 0, l = slides.length; i < l; i++) {
        //        slides[i].id = indexes.pop();
        //    }
        //}
        //
        //function generateIndexesArray() {
        //    var indexes = [];
        //    for (var i = 0; i < currIndex; ++i) {
        //        indexes[i] = i;
        //    }
        //    return shuffle(indexes);
        //}
        //
        //// http://stackoverflow.com/questions/962802#962890
        //function shuffle(array) {
        //    var tmp, current, top = array.length;
        //
        //    if (top) {
        //        while (--top) {
        //            current = Math.floor(Math.random() * (top + 1));
        //            tmp = array[current];
        //            array[current] = array[top];
        //            array[top] = tmp;
        //        }
        //    }
        //
        //    return array;
        //}
    }

})();
