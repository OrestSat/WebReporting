var MyApp = angular.module('MyApp');
MyApp.controller("MenuController", function($scope, MenuService){
    $scope.selectedMonth = MenuService.getSelectedMonth();
    $scope.selectedYear = MenuService.getSelectedYear();

    $scope.$watch('selectedMonth', function() {
        MenuService.setSelectedMonth($scope.selectedMonth);
    });

    $scope.$watch('selectedYear', function() {
        MenuService.setSelectedYear($scope.selectedYear);
    });

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
        {title: 'Monday', index: 1},
        {title: 'Tuesday', index: 2},
        {title: 'Wednesday', index: 3},
        {title: 'Thursday', index: 4},
        {title: 'Friday', index: 5},
        {title: 'Saturday', index: 6},
        {title: 'Sunday', index: 0}
    ];
});