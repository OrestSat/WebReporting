var MyApp = angular.module('MyApp',["ngResource"]);

MyApp.controller('HomeController', function ($rootScope, $scope){
    $scope.userName = "Orest";

    $scope.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    $scope.months = ['January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'];
    $scope.daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function Calendar(month, year) {
        this.month = (isNaN(month) || month == null) ? new Date().getMonth() : month;
        this.year  = (isNaN(year) || year == null) ? new Date().getFullYear() : year;
    }
    function generate(){
        for(var i = 0; i < 24; i++){
            var table_body = document.getElementById("tableBody");
            var tr = document.createElement("tr");
            for(var j = 0; j < 8; j++){
                var td = document.createElement("td");
                if( j === 0 ){ td.innerHTML = i + ":00"; }
                else { td.innerHTML = "Hello"; }
                tr.appendChild(td);
            }
            table_body.appendChild(tr);
        }
    };
    generate();
});

MyApp.controller('MenuController', function($rootScope, $scope){
    $scope.model = {
        selectedDay: {},
        selectedMonth: {},
        selectedYear: {},
        days: [
            {title: "Monday"},
            {title: "Tuesday"},
            {title: "Wednesday"},
            {title: "Thursday"},
            {title: "Friday"},
            {title: "Saturday"},
            {title: "Sunday"}

        ],
        months: [
            {title: "January"},
            {title: "February"},
            {title: "March"},
            {title: "April"},
            {title: "May"},
            {title: "June"},
            {title: "July"},
            {title: "August"},
            {title: "September"},
            {title: "October"},
            {title: "November"},
            {title: "December"}
        ],
        years: [
            {title: 2014},
            {title: 2015},
            {title: 2016}
        ]
    };
    //init
    $scope.model.selectedDay = $scope.model.days[0];
    $scope.model.selectedMonth = $scope.model.months[0];
    $scope.model.selectedYear = $scope.model.years[0];

    $scope.removeDay = function(){
        var ind = $scope.model.days.indexOf( $scope.model.selectedDay );
        $scope.model.days.splice( ind, 1 );
        $scope.model.selectedDay = $scope.model.days[0];
    };
    $scope.removeMonth= function(){
        var ind = $scope.model.months.indexOf( $scope.model.selectedMonth );
        $scope.model.months.splice( ind, 1 );
        $scope.model.selectedMonth = $scope.model.months[0];
    };
    $scope.removeYear = function(){
        var ind = $scope.model.years.indexOf( $scope.model.selectedYear );
        $scope.model.years.splice( ind, 1 );
        $scope.model.selectedYear = $scope.model.years[0];
    };
});

MyApp.factory("Calendar", function(){
    function Calendar(month, year) {
        this.month = (isNaN(month) || month == null) ? new Date().getMonth() : month;
        this.year = (isNaN(year) || year == null) ? new Date().getFullYear() : year;
    }
    return Calendar;
});