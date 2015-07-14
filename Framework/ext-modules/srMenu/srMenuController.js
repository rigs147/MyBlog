angular.module('srMenu')
    .controller('srMenuController', ['$scope', '$rootScope', 'srMenuService', function ($scope, $rootScope, srMenuService) {

        $scope.showMenu = true;
        $scope.openMenuScope = null;
        $scope.isVertical = true;
        $scope.allowHorizontalToggle = true;

        this.getActiveElement = function () {
            return $scope.activeElement;
        };

        this.setActiveElement = function (el) {
            $scope.activeElement = el;
        };

        this.isVertical = function () {
            return $scope.isVertical;
        };

        //this.isOpen = function() {
        //    return srMenuService.isOpen;
        //};

        this.setRoute = function (route) {
            $rootScope.$broadcast('sr-menu-item-selected-event', { route: route });
        };

        this.setOpenMenuScope = function (scope) {

            /*I am checking for a previously existing openMenuScope for the case where you have drilled into multiple sub-menues, if you store the menu scope each time,
              when you click outside the menu you will only close the last sub menu. so you will only want to store this the first time you drill down ($parent scope)*/
            if (!$scope.openMenuScope) {
                $scope.openMenuScope = scope;
            }

        };

        $scope.$on('sr-menu-show', function (evt, data) {
            $scope.showMenu = data.show;
            $scope.isVertical = data.isVertical;
            $scope.allowHorizontalToggle = data.allowHorizontalToggle;
        });

        $scope.toggleMenuOrientation = function () {

            if ($scope.openMenuScope) {
                $scope.openMenuScope.closeMenu();
            };

            $scope.isVertical = !$scope.isVertical;

            $rootScope.$broadcast('sr-menu-orientation-changed-event',
            { isMenuVertical: $scope.isVertical });
        };

        angular.element(document).bind('click', function (e) {
            if ($scope.openMenuScope && !$scope.isVertical) {
                if ($(e.target).parent().hasClass('sr-selectable-item'))
                    return;
                $rootScope.$apply(function () {
                    //$scope.showMenu = false;

                    $scope.openMenuScope.closeMenu();

                    srMenuService.isOpen = false;
                    //e.$parent.$parent.closeMenu();
                    //$rootScope.closeMenu();
                });
                e.preventDefault();
                e.stopPropagation();
            }
        });


    }]);