var CALENDAR = (function(){

	var CALENDAR = {};
	CALENDAR.MONTH_NAMES = ["January", "February","March", "April","May", "June", "July", "August", "September", "October", "November", "December"];
	CALENDAR.DAY_NAMES = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

	var curr_date = new Date();
	CALENDAR.date = {"month":curr_date.getMonth(), "year":curr_date.getFullYear(), "date":curr_date.getDate()};
	// CALENDAR.date.month+=2;



	CALENDAR.init = function(id, cal_date, $rootScope){
		this.$rootScope = $rootScope;
		//CALENDAR VARIABLES
		cal_date.START_DAY = getStartDay( cal_date.month, cal_date.year );
		cal_date.MONTH_DAYS = getMonthDays( cal_date.month, cal_date.year );
		cal_date.LAST_MONTH_DAYS = getMonthDays( cal_date.month-1, cal_date.year );
		$(id).append("<div id='cal-month'></div>");
		$(id).append("<div id='cal-day'></div>");

		//Month
		// $("#cal-month").append("<div id='cal-head'></div>");
		$("#cal-head").append("<div id='cal-title'> <h3>"+this.MONTH_NAMES[this.date.month]+"</h3> </div>");
		$("#cal-month").append("<div id='cal-body'></div>");
		this.createBody(cal_date);
		console.log("end of running");
	}
	
	CALENDAR.createNavigation = function(){
		
	}

	//-------------------------------MONTH MANIPULATIONS-------------------------------
	//---------------------------------------------------------------------------------
	//---------------------------------------------------------------------------------

	CALENDAR.createBody = function(START_DAY, MONTH_DAYS){
		//TABLE HEAD
		var table = $("<div>"), row = $("<div>",{"class":"layout-row"});
		for(var j=0; j<7; j++)
			row.append("<div class='flex'>"+abbrv(this.DAY_NAMES, j)+"</div>")
			// row.append("<td>"+abbrv(this.DAY_NAMES, j)+"</td>");
		table.append(row);

		//TABLE BODY
		var count = 0, calendar = [];
		for(var i = 0; i<6; i++){
			calendar[i] = [];
			row = $("<div>",{"class":"layout-row"});
			
			for(var j=0; j<7; j++){
				// calendar[i][j] 
				var cal_day = (i*7)+j;
				var [elem, count] = this.createDay(cal_day, count, this.date);
				row.append(elem);
			}
			table.append(row);
		}
		$("#cal-body").append(table)
		// this.$rootScope.$apply();
	}



	CALENDAR.createDay = function(cal_day, count, cal_date){
		var day = $("<div>",{"class":"flex day "}), date, id;
		
		//PRE MONTH
		if( cal_day < cal_date.START_DAY ){ //if the current calendar position is less than the first day of current month
			date = cal_date.LAST_MONTH_DAYS - ( cal_date.START_DAY - cal_day - 1);
			day.attr({"id":(this.date.month-1)+"_"+date})
		//CURRENT MONTH OR FUTURE MONTH
		}else{
			count++;	
			date = count;
			if( cal_day >= (cal_date.MONTH_DAYS+cal_date.START_DAY)) //NEXT MONTH
				id = (this.date.month+1)+"_"+date
				// day.attr({"id":(this.date.month+1)+"_"+date})
			else
				id = (this.date.month)+"_"+date
				// day.attr({"id":(this.date.month)+"_"+date})			//CURRENT MONTH
			day.attr({"id":id})
		}

		//if( cal_day < cal_date.START_DAY ) || cal_day >= (cal_date.MONTH_DAYS+cal_date.START_DAY) )
			// return [day, count];
		
		day.append($("<div>",{"id":id+"_list","class":"month_event_list"}));
		day.append("<div class='day_text'>"+date+"</div>");
		day.append($("<md-tooltip>",{"md-direction":'Bottom'}).append("test"));

		day.on("click", this.elementClick);
		day.on("mouseenter mouseexist", this.elementHover);

		//WE HAVE ARRIVED AT THE END OF THIS MONTH
		if( count == cal_date.MONTH_DAYS )
			count = 0;
		return [day, count];
	}

	CALENDAR.elementClick = function(){
		var indicies = CALENDAR.day_events[this.id];

		/*for( i in CALENDAR.day_events[this.id]){
			console.log(CALENDAR.events_public[indicies[i]]);
		}*/
	}
	CALENDAR.setElementClick = function( func ){
		this.elementClick = func;
	}


	CALENDAR.elementHover = function(){
		console.log("default hover"+this);
	}
	CALENDAR.setElementHover = function( func ){
		this.elementHover = func;
	}

	//-------------------------------UTILITIES-----------------------------------------
	//---------------------------------------------------------------------------------
	//---------------------------------------------------------------------------------	
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
	

	//------------------------------------EVENTS----------------------------------------
	//----------------------------------------------------------------------------------
	//----------------------------------------------------------------------------------
	CALENDAR.events_personal = [];
	CALENDAR.events_public = [];
	CALENDAR.day_events = {};
	// CALENDAR.

	CALENDAR.setPublicEvents = function(events){
		//Set property
		this.events_public = events;

		//Display on calendar
		for(ev_i in this.events_public){
			var ev = this.events_public[ev_i]
			var id = this.getDayId(ev.date);
			if (this.day_events[id] === undefined )
				this.day_events[id] = []
			this.day_events[id].push(ev_i);//Stores a pointer to the location of the event
			//Put it onto the calendar
		}

		for(id in this.day_events){
			var elem = $("#"+id+"_list"), list = $('<ul>');
			
			for(ev_i in this.day_events[id]){
				var index = this.day_events[id][ev_i];
				list.append("<li class='month_view_event'> "+this.events_public[index].title+" </li>")
			}
			elem.append(list);
		}
	}

	CALENDAR.setPersonalEvents = function(events){
		this.events_personal = events;
	}

	CALENDAR.addPersonalEvent = function(){
		//Show some intermediate loading thing
		//Send add request to the server with event
		//On a positive response from the server add to the list of personal events
		//trigger a change ? 
	}

	CALENDAR.handleEvent = function(event){
		
	}

	CALENDAR.getDay = function(timestamp){
		var id = getDayId(timestamp);
		return [$("#"+id), id];
	}

	CALENDAR.getDayId = function(timestamp){
		timestamp = Number(timestamp);
		var date = new Date(timestamp * 1000);
		[day, month] = [date.getDate(), date.getMonth()];
		return month+"_"+day;
	}

	return CALENDAR;
	console.log("everything Loaded"); 
})();