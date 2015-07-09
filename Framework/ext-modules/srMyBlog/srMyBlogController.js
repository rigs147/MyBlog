"use strict";

angular.module("srMyBlog").controller("srMyBlogController", ['$scope', '$rootScope', '$window', '$timeout', function ($scope, $rootScope, $window, $timeout) {

    $scope.isMenuVisible = true;

    $scope.isMenuButtonVisible = true;

    $scope.$on('sr-menu-item-selected-event', function(evt, data) {
        $scope.routeString = data.route;

    });

    $($window).on('resize.srMyBlog', function() {
        $scope.$apply(function() {
            checkWidth();
        });
    });

    $scope.$on("$destroy", function() {
        $($window).off("resize.srMyBlog"); // remove the handler
    });

    var checkWidth = function() {
        //var width = $($window).innerWidth();
        var width = Math.max($($window).width(), $($window).innerWidth());
        $scope.isMenuVisible = (width > 768);
        $scope.isMenuButtonVisible = !$scope.isMenuVisible;
    };

    $timeout(function() {
        checkWidth();
    }, 0);

}]);