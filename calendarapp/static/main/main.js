console.log("loaded");
            // $('#test').append('<div ng-cloak><md-content><md-tabs md-dynamic-height md-border-bottom><md-tab label="one"><md-content class="md-padding"><h1 class="md-display-2">Tab One</h1></md-content></md-tab><md-tab label="two"><md-content class="md-padding"><h1 class="md-display-2">Tab Two</h1></md-content></md-tab></md-tabs></md-content></div>');
angular.module("test",["ngMaterial"])
// angular.module("test",["ngRoute"])

/*.config(function($routeProvider){
	$routeProvider.
	when("/balls",{
		templateUrl:""
	});
})*/

.controller("mainCtrl",['$scope','$compile',
    function($scope, $compile ){
        $scope.name = "steffan";
        $scope.area = "brazil";


        var elem = $('<md-tooltip md-direction="Buttom"> test</md-tooltip>');
        $("#test_btn").append(elem);
        $compile(elem)($scope);
        /*angular.element(document).injector().invoke(function($compile){
            var scope = angular.element(elem).scope();
            $compile(elem)(scope);
        });*/

        
        //jquery
        // $("#test_btn").append(str);

    }
]);

/*$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
    })

});*/