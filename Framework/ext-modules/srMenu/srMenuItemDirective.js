"use strict";

angular.module('srMenu')
    .directive('srMenuItem', function () {
        return {
            require: '^srMenu',
            scope: {

                label: '@',
                icon: '@',
                route: '@'

            },
            templateUrl: 'ext-modules/srMenu/srMenuItemTemplate.html',
            //controller: 'srMenuController',
            link: function (scope, el, attr, ctrl) {

                scope.isActive = function () {
                    return el === ctrl.getActiveElement();
                };

                el.on('click', function (evt) {
                    evt.stopPropagation();
                    evt.preventDefault();
                    scope.$apply(function() {
                        ctrl.setActiveElement(el);
                        ctrl.setRoute(scope.route);
                    });
                });
            }
        }
    })