angular.module('srMenu')
    .controller('srMenuController', ['$scope', '$rootScope', function ($scope, $rootScope) {

        this.getActiveElement = function () {
            return $scope.activeElement;
        };

        this.setActiveElement = function (el) {
            $scope.activeElement = el;
        }

        this.setRoute = function (route) {
            $rootScope.$broadcast('sr-menu-item-selected-event', { route: route });
        };

    }]);