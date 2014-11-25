/**
 * Created by Orest on 14.11.2014.
 */
var MyApp = angular.module('MyApp', ['ngResource']);

MyApp.controller("EventController", function($scope, EventService, MenuService){
    $scope.newEvent = {};
    $scope.description = "";
    $scope.events = EventService.list();
    $scope.saveEvent = function(){
        $scope.newEvent = {
            description: $scope.description,
            year: MenuService.year.title,
            month: MenuService.month.title,
            day: MenuService.day,
            beginHour: MenuService.beginHour.title,
            endHour: MenuService.endHour.title
        };
        EventService.save($scope.newEvent);
        $scope.newEvent = {};
    };
    $scope.dispose = function(id){
        EventService.dispose(id);
        if($scope.newEvent.id === id){
            $scope.newEvent = {};
        }
    };
    $scope.edit = function(id){
        $scope.newEvent = angular.copy(EventService.get(id));
    };
    $scope.$on('newEvent', function(){
        $scope.events = EventService.list();
    });
});