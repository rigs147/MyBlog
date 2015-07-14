"use strict";

angular.module('srMenu')
    .directive('srMenu', function ($timeout) {
        return {
            transclude: true,
            scope: {
                
            },
            templateUrl: 'ext-modules/srMenu/srMenuTemplate.html',
            controller: 'srMenuController',
            link: function (scope, el, attr) {
                var item = el.find('.sr-selectable-item:first');
                $timeout(function() {
                    item.trigger('click');
                });
            }
        }
    })