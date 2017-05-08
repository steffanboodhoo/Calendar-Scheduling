angular.module("test")

.controller("calendarCtrl",["$scope",
	function($scope){
		$scope.test = "hello";
		console.log("calendarCtrl loaded");
		var curr_date = new Date();
		//CONSTANTS
		var CALENDAR = {};
		CALENDAR.MONTH_NAMES = ["January", "February","March", "April","May", "June", "July", "August", "September", "October", "November", "December"];
		CALENDAR.DAY_NAMES = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	
		
		CALENDAR.date = {"month":curr_date.getMonth(), "year":curr_date.getFullYear(), "date":curr_date.getDate()};
		CALENDAR.date.month+=2;

		
		
		CALENDAR.init = function(id, cal_date){
			//CALENDAR VARIABLES
			cal_date.START_DAY = getStartDay( cal_date.month, cal_date.year );
			cal_date.MONTH_DAYS = getMonthDays( cal_date.month, cal_date.year );
			cal_date.LAST_MONTH_DAYS = getMonthDays( cal_date.month-1, cal_date.year );
			$(id).append("<div id='cal-head'></div>");
			$(id).append("<div id='cal-body'></div>");
			
			
			
			this.createBody(cal_date);
			console.log("end of running");
		}


		CALENDAR.createBody = function(START_DAY, MONTH_DAYS){
			//TABLE HEAD
			var table = $("<table>"), row = $("<tr>");
			for(var j=0; j<7; j++)
				row.append("<td>"+abbrv(this.DAY_NAMES, j)+"</td>");
			table.append(row);

			//TABLE BODY
			var count = 0, calendar = [];
			for(var i = 0; i<6; i++){
				calendar[i] = [];
				row = $("<tr>");
				
				for(var j=0; j<7; j++){
					// calendar[i][j] 
					var cal_day = (i*7)+j;
					var [elem, count] = this.createDay(cal_day, count, this.date);
					row.append(elem);
				}
				// console.log("moo");
				table.append(row);
			}
			$("#cal-body").append(table)
		}
		


		CALENDAR.createDay = function(cal_day, count, cal_date){
			var day = $("<td>"), date;
			
			//PRE MONTH
			if( cal_day < cal_date.START_DAY ){
				date = cal_date.LAST_MONTH_DAYS - ( cal_date.START_DAY - cal_day - 1);
			//CURRENT MONTH OR FUTURE MONTH
			}else{
				count++;	
				date = count;
			}

			//if( cal_day < cal_date.START_DAY ) || cal_day >= (cal_date.MONTH_DAYS+cal_date.START_DAY) )
				// return [day, count];
			
			
			day.append(date)
			day.on("click", this.elementClick);

			//WE HAVE ARRIVED AT THE END OF THIS MONTH
			if( count == cal_date.MONTH_DAYS )
				count = 0;
			return [day, count];
		}
		
		CALENDAR.elementClick = function(){
			console.log(this)
		}
		CALENDAR.setElementClick = function( func ){
			this.elementClick = func;
		}

		function abbrv( list, index){
			return list[index].slice(0,3);
		}

		function getStartDay(month, year){
			var date = new Date(year, month, 1); //set 'date' to be first day of the month
			return date.getDay();	//returns day of the week of 'date'
		}

		function getMonthDays(month, year){
			// the 0'th day is the number of days in the previous month, so we use the next month to get the number of days in the current 
			var date = new Date(year, month+1, 0); 
			// No need to worry about december, the Date object handles overflow nicely
			return date.getDate();
		}

		CALENDAR.init("#test", CALENDAR.date);
	}



]);