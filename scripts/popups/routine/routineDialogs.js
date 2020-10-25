RoutineDialogs = {
	deleteRoutine: function(){
		b = window.confirm("Czy na pewno usunąć rutynę o nazwie " + RoutineInfo.actualRoutineName + "?");
		if(b){
			user.routines.deleteRoutine(RoutineInfo.actualRoutineName);
			window.alert("Rutyna została usunięta!");
			PopUps.closePopUp();
		}
		else{
			window.alert("Rutyny nie usunięto!");
		}
	}
}
