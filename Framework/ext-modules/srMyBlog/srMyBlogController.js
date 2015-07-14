"use strict";

angular.module("srMyBlog").controller("srMyBlogController", ['$scope', '$rootScope', '$window', '$timeout', function ($scope, $rootScope, $window, $timeout) {

    $scope.isMenuVisible = true;
    $scope.isMenuButtonVisible = true;
    $scope.isMenuVertical = true;

    $scope.$on('sr-menu-item-selected-event', function(evt, data) {
        $scope.routeString = data.route;
        checkWidth();
        broadcastMenuState();

    });

    $scope.$on('sr-menu-orientation-changed-event', function (evt, data) {
        $scope.isMenuVertical = data.isMenuVertical;
    });

    $($window).on('resize.srMyBlog', function() {
        $scope.$apply(function() {
            checkWidth();
            broadcastMenuState();
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

   $scope.menuButtonClicked = function() {
       $scope.isMenuVisible = !$scope.isMenuVisible;
       broadcastMenuState();
       //$scope.$apply();
   }

    var broadcastMenuState = function() {
        $rootScope.$broadcast('sr-menu-show',
        {
            show: $scope.isMenuVisible,
            isVertical: $scope.isMenuVertical,
            allowHorizontalToggle: !$scope.isMenuButtonVisible
    });
    };


    $timeout(function() {
        checkWidth();
    }, 0);

}]);