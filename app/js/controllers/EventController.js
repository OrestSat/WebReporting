/**
 * Created by Orest on 14.11.2014.
 */
var MyApp = angular.module('MyApp', ['ngResource']);

MyApp.controller("EventController", function($scope, EventService){
    $scope.newEvent = {};
    $scope.events = EventService.list();
    $scope.saveEvent = function(){
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
});