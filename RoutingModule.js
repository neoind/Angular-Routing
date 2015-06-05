var sampleApp = angular.module('phonecatApp', ["ngRoute"]);

sampleApp.config(['$routeProvider','$locationProvider',  function ($routeProvider,$locationProvider) {
    $routeProvider.
        when('/root', {
            templateUrl: '/Partials/list.html',
            controller: 'MainCtrl'
        }).
        when('/Add', {
            templateUrl: 'Partials/add.html',
            controller: 'AddCtrl'
        }).
        when('/Edit/:id', {
            templateUrl: 'Partials/edit.html',
            controller: 'EditCtrl'
        }).
        otherwise({
            redirectTo: 'AngularRouting.html'
        });

    $locationProvider.html5Mode(true);
}]);

sampleApp.controller("AddCtrl", function ($scope,$location) {
    $scope.person = { name: '', description: '' };
    $scope.Save = function () {
        alert($scope.crew.length);
        if ($scope.crew.lastIndexOf($scope.person.name) < 0) {
            $scope.crew.push({ name: $scope.person.name, description: $scope.person.description });
        }

        $location.path('/');
    };
});

sampleApp.controller("EditCtrl", function ($scope, $location,$routeParams) {
    $scope.message = "I am editing";
    alert($scope.crew.length);
    $scope.person = $scope.crew[$routeParams.id];
    $scope.Update = function () {
        if ($scope.crew.lastIndexOf($scope.person.name) < 0) {
            $scope.crew.push({ name: $scope.person.name, description: $scope.person.description});
        }
        $location.path('/');
    };
});

sampleApp.controller("MainCtrl", function ($scope) {
    $scope.message = "this is main control";
    $scope.crew = [{ name: 'Picard', description: 'rider' },
        { name: 'Luii', description: 'robot' },
        { name: 'Anakin', description: 'DarkLord' }];
});