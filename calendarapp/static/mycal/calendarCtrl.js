angular.module("test")

.controller("calendarCtrl",["$scope","$rootScope",
	function($scope, $rootScope){

			CALENDAR.init("#calendar", CALENDAR.date, $rootScope);
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
					'title':'something else'
					,'date':'1496894184'
					
				}
				,{
					'title':'Another one'
					,'date':'1496894184'
					
				}
				,{
					'title':'Another another one'
					,'date':'1496894184'
					
				}
				/*,{
					'title':'Probability from each state to another'
					,'date':'1494299025'
				}
				,{
					'title':'Transition Matrix'
					,'date':'1494831825'
				}*/

			];

			$('#test').append('<div ng-cloak><md-content><md-tabs md-dynamic-height md-border-bottom><md-tab label="one"><md-content class="md-padding"><h1 class="md-display-2">Tab One</h1></md-content></md-tab><md-tab label="two"><md-content class="md-padding"><h1 class="md-display-2">Tab Two</h1></md-content></md-tab></md-tabs></md-content></div>');
			CALENDAR.setPublicEvents(test_events)
			$('#test').append('<p>hello</p>')
	}
]);