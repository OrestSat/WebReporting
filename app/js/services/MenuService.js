/**
 * Created by Orest on 18.11.2014.
 */
var MyApp = angular.module('MyApp');

MyApp.service("MenuService", function() {
    var selectedMonth = new Date().getMonth();
    var selectedYear = new Date().getYear();

    this.setSelectedMonth = function(month){
        selectedMonth = month;
    };
    this.setSelectedYear = function(year){
        selectedYear = year;
    };
    this.getSelectedMonth = function(){
        return selectedMonth;
    };
    this.getSelectedYear = function(){
        return selectedYear;
    };
});