﻿"use strict";

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

                scope.isVertical = function() {
                    return ctrl.isVertical() || el.parents('.sr-subitem-section').length > 0;
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