var MyApp = angular.module('MyApp');
MyApp.controller("MenuController", function($scope, MenuService){

    $scope.years = [
        {title: 2014},
        {title: 2015},
        {title: 2016},
        {title: 2017}
    ];
    $scope.months = [
        {title: 'January', index: 0},
        {title: 'February', index: 1},
        {title: 'March', index: 2},
        {title: 'April', index: 3},
        {title: 'May', index: 4},
        {title: 'June', index: 5},
        {title: 'July', index: 6},
        {title: 'August', index: 7},
        {title: 'September', index: 8},
        {title: 'October', index: 9},
        {title: 'November', index: 10},
        {title: 'December', index: 11}
    ];
    $scope.days = [
        {title: 'Monday'},
        {title: 'Tuesday'},
        {title: 'Wednesday'},
        {title: 'Thursday'},
        {title: 'Friday'},
        {title: 'Saturday'},
        {title: 'Sunday'}
    ];

    $scope.$on('timeUpdated', function(){
        $scope.beginHour = MenuService.beginHour;
        $scope.endHour = MenuService.endHour;
        $scope.beginHours = MenuService.beginHours;
        $scope.endHours = MenuService.endHours;

    });
    $scope.$on('valuesUpdated', function(){
        $scope.selectedYear = MenuService.year;
        $scope.selectedMonth = MenuService.month;
    });
    $scope.$on('dayUpdated', function(){
        $scope.selectedDay = MenuService.day;
    });

    $scope.$watch('selectedYear', function() {
        MenuService.updateYear($scope.selectedYear);
    });
    $scope.$watch('selectedMonth', function() {
        MenuService.updateMonth($scope.selectedMonth)
    });
    $scope.$watch('selectedBegin', function(){
       MenuService.updateBeginHour($scope.selectedBegin.index);
    });
    $scope.$watch('selectedEnd', function(){
       MenuService.updateEndHour($scope.selectedEnd.index);
    });
});