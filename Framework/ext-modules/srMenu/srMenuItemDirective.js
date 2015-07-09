"use strict";

angular.module('srMenu')
    .directive('srMenuItem', function () {
        return {
            require: '^srMenu',
            scope: {

                label: '@',

            },
            templateUrl: 'ext-modules/srMenu/srMenuItemTemplate.html',
            //controller: 'srMenuController',
            link: function (scope, el, attr, ctrl) {

            }
        }
    })