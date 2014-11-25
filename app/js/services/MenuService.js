/**
 * Created by Orest on 18.11.2014.
 */
var MyApp = angular.module('MyApp');

MyApp.factory("MenuService", function($rootScope) {

    var allHours = [{title: "00:00", index:0}, {title: "01:00", index: 1}, {title: "02:00", index: 2},
        {title: "03:00", index: 3}, {title: "04:00", index: 4}, {title: "05:00", index: 5}, {title: "06:00", index: 6},
        {title: "07:00", index: 7}, {title: "08:00", index: 8}, {title: "09:00", index: 9}, {title: "10:00", index: 10},
        {title: "11:00", index: 11}, {title: "12:00", index: 12}, {title: "13:00", index: 13}, {title: "14:00", index: 14},
        {title: "15:00", index: 15}, {title: "16:00", index: 16}, {title: "17:00", index: 17}, {title: "18:00", index: 18},
        {title: "19:00", index: 19}, {title: "20:00", index: 20}, {title: "21:00", index: 21}, {title: "22:00", index: 22},
        {title: "23:00", index: 23}, {title: "24:00", index: 24}];

    var selected = {};
    selected.year = new Date().getFullYear();
    selected.month = new Date().getMonth();
    selected.day = new Date().getDay();
    selected.beginHour = allHours[0];
    selected.endHour = allHours[24];
    selected.beginHours = allHours;
    selected.endHours = allHours;

    selected.updateMonth = function(value){
        this.month = value;
        $rootScope.$broadcast("valuesUpdated");
    };
    selected.updateYear = function(value){
      this.year = value;
        $rootScope.$broadcast("valuesUpdated");
    };
    selected.updateDay = function(value){
        this.day = value;
        $rootScope.$broadcast("dayUpdated");
    };
    selected.updateBeginHour = function(index){
        this.beginHour = allHours[index];
        this.endHours = allHours.slice(index+1);
        $rootScope.$broadcast("timeUpdated");
    };
    selected.updateEndHour = function(index){
        this.endHour = allHours[index];
        this.beginHours = allHours.slice(0, index);
        $rootScope.$broadcast("timeUpdated");
    };
    return selected;
});