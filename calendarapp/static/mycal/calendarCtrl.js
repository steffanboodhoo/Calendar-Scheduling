angular.module("test")

.controller("calendarCtrl",["$scope",
	function($scope){

			CALENDAR.init("#calendar", CALENDAR.date);
			var k = CALENDAR.getDay(1494462200)
			k.html("")
	}
]);