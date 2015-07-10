angular.module('srMenu')
    .controller('srMenuController', ['$scope', '$rootScope', function ($scope, $rootScope) {

        $scope.showMenu = true;

        $scope.isVertical = true;

        this.getActiveElement = function () {
            return $scope.activeElement;
        };

        this.setActiveElement = function (el) {
            $scope.activeElement = el;
        };

        this.isVertical = function () {
            return $scope.isVertical;
        };

        this.setRoute = function (route) {
            $rootScope.$broadcast('sr-menu-item-selected-event', { route: route });
        };

        $scope.$on('sr-menu-show', function (evt, data) {
            $scope.showMenu = data.show;
        });

        $scope.toggleMenuOrientation = function () {
            $scope.isVertical = !$scope.isVertical;

            $rootScope.$broadcast('sr-menu-orientation-changed-event',
            { isMenuVertical: $scope.isVertical });
        };

    }]);