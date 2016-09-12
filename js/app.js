/**
 * Route Config
 *
 * @requires AngularJS 1.5.8 {@link https://code.angularjs.org/1.5.8/angular.min.js }
 * @requires AngularJS Route 1.5.8 {@link https://code.angularjs.org/1.5.8/angular-route.min.js }
 * @author Andrew Klitbo
 */
var personalSite = angular.module('personalSite', ['ngRoute']);
personalSite.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
        })
        .when('/home', {
            templateUrl: 'pages/home.html',
        })
        .when('/compsci', {
            templateUrl: 'pages/compsci.html',
        })
        .when('/instrux', {
            templateUrl: 'pages/instrux.html',
        })
        .when('/iawd', {
            templateUrl: 'pages/iawd.html',
        })
        .when('/its', {
            templateUrl: 'pages/its.html',
        })
        .when('/esdc', {
            templateUrl: 'pages/esdc.html',
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);

/**
 *
 * @author Andrew Klitbo
 */
personalSite.controller('MasterController', ['$scope', function($scope) {
    $scope.setTitle = function($title) {
        $scope.page_title = ($title);
    };

    skel.breakpoints({
        large: "(max-width: 1280px)",
        medium: "(max-width: 980px)",
        small: "(max-width: 736px)",
        xsmall: "(max-width: 480px)"
    });

    skel.layout({
        conditionals: true
    });
}]);

/**
 *
 * @author Andrew Klitbo
 */
personalSite.controller('HomeController', ['$scope', function($scope) {
    $scope.setTitle('Andrew Klitbo | Personal Website');
}]);

/**
 *
 * @author Andrew Klitbo
 */
personalSite.controller('CompSciController', ['$scope', function($scope) {
    $scope.setTitle('Andrew Klitbo | Education | Computing Science');
}]);

/**
 *
 */
personalSite.controller('IawdController', ['$scope', function($scope) {
    $scope.setTitle('Andrew Klitbo | Education | Internet Applications and Web Development');
}]);

/**
 *
 * @author Andrew Klitbo
 */
personalSite.controller('ItsController', ['$scope', function($scope) {
    $scope.setTitle('Andrew Klitbo | Employment | Information Technology Services');
}]);

/**
 *
 * @author Andrew Klitbo
 */
personalSite.controller('EsdcController', ['$scope', function($scope) {
    $scope.setTitle('Andrew Klitbo | Employment | Employment and Social Development Canada');
}]);

/**
 *
 * @author Andrew Klitbo
 */
personalSite.controller('InstruxController', ['$scope', function($scope) {
    $scope.setTitle('Andrew Klitbo | Employment | Instrux Media');
}]);
