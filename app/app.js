/**
 * Created by Adrien Hascour on 11/12/2017.
 */

/*global angular */

var app = angular.module('digifood', [
    'ui.router'
]);

app.config(['$stateProvider',
            '$locationProvider',
            '$urlRouterProvider',
            '$uiViewScrollProvider',

    function (
        $stateProvider,
        $locationProvider,
        $urlRouterProvider,
        $uiViewScrollProvider) {

        $uiViewScrollProvider.useAnchorScroll(); //first part of code to scrolltop after change of state

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'components/partials/partial-home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            })
            .state('fields', {
                url: '/secteurs/:page',
                templateUrl: 'components/templates/template-fields.html',
                controller: 'FieldCtrl',
                controllerAs: 'f'
            })
            .state('products', {
                url: '/produits/:page',
                templateUrl: 'components/templates/template-products.html',
                controller: 'ProductCtrl',
                controllerAs: 'f'
            })
            .state('entreprise', {
                url: '/entreprise',
                templateUrl: 'components/partials/partial-entreprise.html',
//                controller: 'EntrepriseCtrl',
//                controllerAs: 'vm'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'components/partials/partial-contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
}]);

/* code to scrolltop after change of state (i.e circle from home) */
app.run(function ($rootScope, $location, $stateParams, $anchorScroll, $http) {
    $rootScope.$on('$stateChangeSuccess', function () {
        if ($stateParams.scrollTo) {
            $location.hash($stateParams.scrollTo);
            $anchorScroll();
        }
    });

    /* detect user browser language & and serve correct json */
    /* if clicking on a flag keep french version means the file path is wrong */
    var initLang = function () {
        var listLang = ["fr", "en", "es", "de"]; /* available translations */
        var userLang = navigator.language || navigator.userLanguage;

        if (!listLang.includes(userLang)) userLang = 'fr'; /* french if not in available translations*/

        $http.get('components/wording/locale_' + userLang + '.json')
            .then(function (res) {
                $rootScope.w = res.data[0];
            });
    };
    initLang();
});

app.controller('SwitchLangCtrl', function ($http, $scope, $rootScope) {
    $scope.initLang = function (userLang) {
        var listLang = ["fr", "en", "es", "de"]; /* available translations */

        if (!userLang) {
            var userLang = navigator.language || navigator.userLanguage;
        }

        if (!listLang.includes(userLang)) userLang = 'fr'; /* french if not in available translations*/

        $http.get('components/wording/locale_' + userLang + '.json')
            .then(function (res) {
                $rootScope.w = res.data[0];
            });
    };
})
