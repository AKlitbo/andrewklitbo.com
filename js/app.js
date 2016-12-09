/**
 * AppJS
 *
 * @requires jQuery > 1.3.2 {@link https://code.jquery.com/ }
 * @requires AngularJS 1.5.8 {@link https://code.angularjs.org/1.5.8/angular.min.js }
 * @requires Skel and Skel Layout 3.0.1 {@link https://github.com/ajlkn/skel }
 * @requires jQuery Colorbox {@link http://www.jacklmoore.com/colorbox/ } *
 * @author Andrew Klitbo
 */
var personalSite = angular.module('personalSite', []);

/**
 * Master Controller
 */
personalSite.controller('MasterController', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {
    var url = $location.path();
    $scope.includeArea = false;
    if (url && url.charAt(0) === '/') {
        url = url.slice(1);
        $scope.includeArea = url;
        $anchorScroll(url);
    };

    $scope.toggleArea = function(id) {
        return $scope.includeArea === id ? true : false;
    };

    $scope.showArea = function(id) {
        if ($scope.includeArea === id && $scope.includeArea != false) {
            $scope.includeArea = false;
        } else {
            $scope.includeArea = id;
            $anchorScroll(id);
        }
    };

    $scope.hideArea = function() {
        $scope.includeArea = false;
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
 * Contact Controller
 */
personalSite.controller('ContactController', ['$scope', '$http', function($scope, $http) {
    $scope.submitted = false;
    $scope.submitButtonDisabled = false;
    $scope.formData = {};

    $scope.submit = function() {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        $http({
            method: 'POST',
            url: 'contact.php',
            data: $.param($scope.formData),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function(response) {
            if (!response.data.success) {
                $scope.submitButtonDisabled = false;
                $scope.message = response.data.message;
            } else {
                $scope.submitButtonDisabled = true;
                $scope.message = response.data.message;
            }
        });
    }
}]);

/**
 * Gallery Directive
 */
personalSite.directive('appGallery', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        scope: {
            gallery: '@'
        },
        link: function(scope) {
            $timeout(function() {
                jQuery('.' + scope.gallery).colorbox({
                    maxWidth: '95%',
                    maxHeight: '95%',
                    rel: scope.gallery,
                    current: "{current} of {total}",
                    transition: "fade"
                });
            });
        }
    };
}]);
