"use strict";

angular.module('srMenu').directive('srMenuGroup', function() {
    return {
        require: '^srMenu',
        transclude: true,
        scope: {
            label: '@',
            icon: '@'
            //route: '@'
        },
        templateUrl: 'ext-modules/srMenu/srMenuGroupTemplate.html',
        link: function(scope, el, attrs, ctrl) {
            scope.isOpen = false;

            scope.closeMenu = function() {
                scope.isOpen = false;
            };

            scope.clicked = function() {
                scope.isOpen = !scope.isOpen;
            };

            scope.isVertical = function () {
                return ctrl.isVertical();
            }
        }

    };
});