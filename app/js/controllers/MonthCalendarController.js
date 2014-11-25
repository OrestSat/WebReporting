/**
 * Created by Orest on 18.11.2014.
 */
var MyApp = angular.module('MyApp');

MyApp.controller("MonthCalendarController", function($scope, CalendarService, MenuService){

    $scope.newCalendar = CalendarService.newCalendar();
    $scope.calendarDays = CalendarService.getCalendarDays();
    $scope.days = CalendarService.getDays();

    $scope.$on('valuesUpdated', function(){
        $scope.selectedYear = MenuService.year;
        $scope.selectedMonth = MenuService.month;

        $scope.newCalendar = CalendarService.newCalendar($scope.selectedMonth.index, $scope.selectedYear.title);
        $scope.calendarDays = CalendarService.getCalendarDays();
    });

    $scope.$watch('selectedDay', function() {
        MenuService.updateDay($scope.selectedDay);
    });

    $scope.checked = false;
    $scope.setSelectedDay = function(value){

        if($scope.selectedDay === undefined ){
            $scope.selectedDay = value;
            $scope.checked  = !$scope.checked;
        } else if(value === $scope.selectedDay ){
            $scope.checked  = !$scope.checked;
        } else{
            $scope.selectedDay = value;
        }
    };
    $scope.setClass = function(index){
        if(index === 5 || index === 6){
            return "warning";
        }
        else{
            return "active";
        }
    };
});