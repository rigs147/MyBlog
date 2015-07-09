"use strict";

angular.module("srMyBlog").directive("srMyBlog", function() {
    return {
        transclude: true,
        scope: {
            title: '@',
            subtitle: '@',
            iconFile: '@'

        },
        controller: "srMyBlogController",
        templateUrl: "ext-modules/srMyBlog/srMyBlogTemplate.html"
    }
});