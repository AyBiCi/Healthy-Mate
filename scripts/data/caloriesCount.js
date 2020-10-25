CaloriesCount = {
	eatedForDay: function(day){
		var r = user.routines.getRoutinesForDay(day, "Diet");
		var sum = 0;
		for( a in r ){
			routine = r[a];
			if(typeof routine.calories !== "undefined")
				sum += +routine.calories;
		}
		return sum;
	},
	burnedForDay: function(day){
		var r = user.routines.getRoutinesForDay(day, "all");
		var sum = 0;
		for( a in r ){
			routine = r[a];
			if(typeof routine.calories !== "undefined")
				sum += +routine.calories;
		}
		return sum - this.eatedForDay(day);
	},
	endOfDayBilans: function(day){
		return this.eatedForDay(day) - this.burnedForDay(day); 
	}
	
}