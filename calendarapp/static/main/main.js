console.log("loaded");
angular.module("test",["ngMaterial"])
// angular.module("test",["ngRoute"])

/*.config(function($routeProvider){
	$routeProvider.
	when("/balls",{
		templateUrl:""
	});
})*/

.controller("mainCtrl",['$scope',
    function($scope ){
        $scope.name = "steffan";
        $scope.area = "brazil";
  
    }
]);

/*$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
    })

});*/