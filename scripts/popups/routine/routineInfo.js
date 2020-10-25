RoutineInfo = {
	actualRoutineName: "",

	updateRoutineForm: function(routine){
		this.actualRoutineName = routine.name;
		routinename.innerHTML = routine.name;
		time = new TimeReader(routine.time);
		routinetimestamp.innerHTML = time.getTimeStamp(routine.howLongTakes);
		routinedays.innerHTML = user.routines.getRoutineDays(routine);
		routinecategory.innerHTML = routine.category;
		routinecategoryreal.innerHTML = user.routines.routinetypes[routine.category].type;
		routineCalories.innerHTML = routine.calories;
		routineDesc.innerHTML = routine.description;
	}
}