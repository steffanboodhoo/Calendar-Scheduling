angular.module("test")
.controller("c2Ctrl", function($scope) {


});

$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
     	weekends: false // will hide Saturdays and Sundays
     	,header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay,listWeek'
		}
     	,views: {
	        basic: {
	            // options apply to basicWeek and basicDay views
	        },
	        agenda: {
	            // options apply to agendaWeek and agendaDay views
	        },
	        week: {
	            // options apply to basicWeek and agendaWeek views
	        },
	        day: {
	            // options apply to basicDay and agendaDay views
	        }
	    }
     	,googleCalendarId: 'boodhoo100@gmail.com'
     	,color: 'yellow'   // an option!
    	,textColor: 'black' // an option!
     	,events: [
	        {
	            title  : 'event1',
	            start  : '2017-05-01'
	        },
	        {
	            title  : 'event2',
	            start  : '2017-05-05',
	            // end    : '2010-01-07'
	        },
	        {
	            title  : 'event3',
	            start  : '2017-05-09T12:30:00',
	            allDay : false // will make the time show
	        }
	    ]
    })
    console.log('after application of calendar function 1');
});
