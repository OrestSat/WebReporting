/**
 * Created by Orest on 14.11.2014.
 */
var MyApp = angular.module('MyApp');

MyApp.service("EventService", function($rootScope){
    var eid = 1;
    var events = [{
        id: 0,
        'description': "My first task",
        'year': 2014,
        'month': "May",
        'day': "Monday",
        'beginHour': "11:00",
        'endHour': "14:00"
    }];
    this.save = function(event){
        if(event.id === null){
            event.id = eid++;
            events.push(event);
        } else{
            for(var i in events){
                if(events[i].id === event.id){
                    events[i] = event;
                }
            }
        }
        $rootScope.$broadcast("newEvent");
    };
    this.get = function(id){
        for(var i in events){
            if(events[i].id === id){
                return events[i];
            }
        }
    };
    this.dispose = function(id){
        for(var i in events){
            if(events[i].id === id){
                events.slice(i, 1);
            }
        }
    };
    this.list = function(){
        return events;
    };
});