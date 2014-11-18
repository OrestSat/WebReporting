var MyApp = angular.module('MyApp');

MyApp.service("CalendarService", function() {
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var days_labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    var cal_months_labels = ['January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'];
    var month;
    var year;
    var monthLength;
    var days = [[],[],[],[],[],[]];

    var startingDay;
    var current_date = new Date();

    var getLength = function(month, year){
        if (month == 1) { // February only!
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                return 29;
            }
        }
        else{
            return daysInMonth[month];
        }
    };
    this.newCalendar = function(_month, _year){
        month = (isNaN(_month) || _month == null) ? current_date.getMonth() : _month;
        year = (isNaN(_year) || _year == null) ? current_date.getFullYear() : _year;
        monthLength = getLength(_month);
        var firstDay = new Date(year, month, 1);
        startingDay= firstDay.getDay();
        var k = 1;
        var count = 0;
        for ( var i = 0; i < 6; i++) {
            for (var j = 0; j < 7; j++) {
                if (count <= startingDay) {
                    days[i][j] = null;
                    count++;
                }
                else {
                    days[i][j] = k;
                    k++;
                    if (k === getLength(_month, _year) + 1){
                        break;
                    }
                }
            }
            if (k === getLength(_month, _year) + 1){
                break;
            }
        }
    };
    this.getSelectedMonth = function(){
        return cal_months_labels[month];
    };
    this.getSelectedYear = function(){
        return year;
    };
    this.getCalendarDays = function(){
        return days;
    }
    this.getDays = function(){
        return days_labels;
    }
});