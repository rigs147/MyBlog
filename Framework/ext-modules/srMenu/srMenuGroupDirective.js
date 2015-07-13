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

                if (el.parents('.sr-subitem-section').length == 0)
                    scope.setSubMenuPosition();

                ctrl.setOpenMenuScope(scope);
            };

            scope.isVertical = function () {
                return ctrl.isVertical() || el.parents('.sr-subitem-section').length > 0;
            }

            scope.setSubMenuPosition = function() {
                var pos = el.offset();// offset is a jquery functionthat gives you the left and top css styles
                $('.sr-subitem-section').css({ 'left': pos.left + 20, 'top': 36 });
            }


        }

    };
});