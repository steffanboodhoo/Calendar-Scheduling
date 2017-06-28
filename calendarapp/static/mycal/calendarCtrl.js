angular.module("test")

.controller("calendarCtrl",["$scope",
	function($scope){

			CALENDAR.init("#calendar", CALENDAR.date);
			/*var k = CALENDAR.getDay(1494462200)
			k.html("")*/
			var test_events = [
				{
					'title':'Markov Models'
					,'date':'1498623807'
				}
				,{
					'title':'set of possible states'
					,'date':'1496894184'
					
				}
				,{
					'title':'Probability from each state to another'
					,'date':'1494299025'
				}
				,{
					'title':'Transition Matrix'
					,'date':'1494831825'
				}

			];
			
			CALENDAR.setPublicEvents(test_events)
	}
]);