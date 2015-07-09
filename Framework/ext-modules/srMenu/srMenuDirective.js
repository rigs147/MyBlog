"use strict";

angular.module('srMenu')
    .directive('srMenu', function () {
        return {
            transclude: true,
            scope: {
                
            },
            templateUrl: 'ext-modules/srMenu/srMenuTemplate.html',
            controller: 'srMenuController',
            link: function (scope, el, attr) {

            }
        }
    })