angular.module('app').directive('wwaDashboard', [function() {
    return {
        scope: {

        },
        template: '<sr-Dashboard></sr-Dashboard>',
        link: function (scope) {

            scope.title = 'Journey Dashboard';

            scope.gridsterOpts = {
                columns: 12,
                margins: [20, 20],
                outerMargin: false,
                pushing: true,
                floating: true,
                swapping: false
            };

            scope.widgets = [
                {
                    title: "Photos",
                    sizeX: 3,
                    sizeY: 3,
                    row: 0,
                    col: 0
                },
                {
                    title: "Locations",
                    sizeX: 2,
                    sizeY: 4,
                    row: 0,
                    col: 5
                }
            ];
        }


    }
}]);