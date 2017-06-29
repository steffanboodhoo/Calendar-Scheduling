console.log("loaded");
            $('#test').append('<div ng-cloak><md-content><md-tabs md-dynamic-height md-border-bottom><md-tab label="one"><md-content class="md-padding"><h1 class="md-display-2">Tab One</h1></md-content></md-tab><md-tab label="two"><md-content class="md-padding"><h1 class="md-display-2">Tab Two</h1></md-content></md-tab></md-tabs></md-content></div>');
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


        /*var str = '<md-tooltip md-direction="Buttom"> test</md-tooltip>';
        var elem = angular.element(document.getElementById('test_btn'));

        var new_elem = angular.element(str);
        console.log(new_elem);
        new_elem = $compile(new_elem)($scope);

        elem.append(new_elem);
        // $scope.$digest();
        console.log(elem);*/
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