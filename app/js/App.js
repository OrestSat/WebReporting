var MyApp = angular.module('MyApp');

//Do configuration and routing here

MyApp.config(['$routeProvider',function($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: 'app/view/month.html',
            controller: 'MonthCalendarController'
        }).
        otherwise({
            redirectTo: '/'
        })
}]);