angular.module('app').factory('dataService', ['$timeout'], function ($timeout) {
    var locations = [
        {
            id: 001,
            Continent: 'Asia',
            Country: 'Thailand',
            Region: 'Bangkok',
            Temperature: 25,
            lengthOfStay: 5
        },
                {
                    id: 001,
                    Continent: 'Asia',
                    Country: 'Malaysia',
                    Region: 'Kuala Lumpur',
                    Temperature: 20,
                    lengthOfStay: 3
                },
                        {
                            id: 001,
                            Continent: 'Asia',
                            Country: 'Singapore',
                            Region: 'Singapore',
                            Temperature: 23,
                            lengthOfStay: 6
                        },
                                {
                                    id: 001,
                                    Continent: 'Asia',
                                    Country: 'Vietnam',
                                    Region: 'Pnom Phen',
                                    Temperature: 30,
                                    lengthOfStay: 8
                                }

    ];

    var Comrades = [
        {
            id: 001,
            Name: 'Sean Rigney',
            age: '60',
            favouriteColour: 'Malachite',
            favouriteScientist: 'Carl Sagan',
            image: 'sean.jpg'
        },
                {
                    id: 002,
                    Name: 'Eamonn Rigney',
                    age: '60',
                    favouriteColour: 'Blue',
                    favouriteScientist: 'Brian Cox',
                    image: 'eamonn.jpg'
                },
                        {
                            id: 001,
                            Name: 'William Harkin',
                            age: '60',
                            favouriteColour: 'red',
                            favouriteScientist: 'Neil DeGrasse Tyson',
                            image: 'willy.jpg'
                        },
                                {
                                    id: 001,
                                    Name: 'Sam',
                                    age: '20',
                                    favouriteColour: 'pink',
                                    favouriteScientist: 'Stephen Hawkings',
                                    image: 'sam.jpg'
                                },

    ];

    var getLocation = function (id) {
        return function () {
            for (var i = 0; i < locations.length; i++) {
                if (locations[i].id === id) {
                    return locations[i];
                }
                return undefined;
            }
        };
    };

    var getLocations = function () {
        return locations;
    };

    var getComrades = function () {
        return comerades;
    };

    var getComrade = function (id) {
        return function () {
            for (var i = 0; i < comerades.length; i++) {
                if (comerades[i].id === id) {
                    return comerades[i];
                }
                return undefined;
            }
        };
    };

    return {
        getLocations: getLocations,
        getLocation: getLocation,
        getComrade: getComrade,
        getComrades: getComrades
    }


});