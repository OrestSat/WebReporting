/**
 * Created by Orest on 18.11.2014.
 */
var MyApp = angular.module('MyApp');

MyApp.controller("MonthCalendarController", function($scope, CalendarService, MenuService){
    $scope.newCalendar = CalendarService.newCalendar(MenuService.getSelectedMonth(), MenuService.getSelectedYear());
    $scope.currentYear = CalendarService.getSelectedYear();
    $scope.currentMonth = CalendarService.getSelectedMonth();
    $scope.currentMonthDays = CalendarService.getCalendarDays();
    $scope.calendarDays = CalendarService.getCalendarDays();
    $scope.days = CalendarService.getDays();

    $scope.$watch(CalendarService.getSelectedMonth(), function(newVal, oldVal){
        if(newVal){
            $scope.newCalendar = CalendarService.newCalendar(newVal, CalendarService.getSelectedYear());
        }
    });

    $scope.$watch(CalendarService.getSelectedYear(), function(newVal, oldVal){
        if(newVal){
            $scope.newCalendar = CalendarService.newCalendar(CalendarService.getSelectedYear(), newVal);
        }
    });
    $scope.setSelectedDay = function(value){
        $scope.selectedDay = value;
    };

    $scope.setColor = function(index){
      if(index === 5 || index === 6){
          return {
              background_color: '#FFEDED'
          }
      }
        else{
          return{
              background_color: '#f5f5f5'
          }
      }
    };
});