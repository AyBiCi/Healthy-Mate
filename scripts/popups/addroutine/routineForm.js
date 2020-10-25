RoutineForm = {
	
	insertRoutinesIntoSelect: function(){
		m = "";
		c = user.routines.routinetypes;
		for(r in c){
			m = m + "<option>" + r + "</option>";
		}
		
		routineCategory.innerHTML = m;
	},

	//dodaje nasłuchiwanie wydarzenia np. do wyświetlania kalorii
	addEventDetection: function()
	{
		document.getElementById('routineHours').addEventListener('change',this.outputCalories)
		document.getElementById('routineCategory').addEventListener('change',this.outputCalories)	
	},

	//wypisuje przewidywanie spalenie kalorii
	outputCalories: function()
	{
		var modifier = 1
		
		var category = document.getElementById('routineCategory').value
		
		modifier = +user.routines.routinetypes[category].modifier;
		
		var kcal = Math.floor(user.getWeight() * Number(document.getElementById("routineHours").value) * modifier)
		
		document.getElementById("calories").innerHTML = "Przewidywane spalenie kalorii: "+kcal
		return kcal
	},


	createRoutine: function()
	{
		var routineName = document.getElementById("routineName").value;
		var routineDays = user.routines.createDays(document.getElementById("monCheck").checked,
		document.getElementById("thueCheck").checked,
		document.getElementById("wenCheck").checked,
		document.getElementById("thuCheck").checked,
		document.getElementById("friCheck").checked,
		document.getElementById("satCheck").checked,
		document.getElementById("sunCheck").checked);
		var routineTime = document.getElementById("routineTime").value;
		var routineHours = document.getElementById("routineHours").value;
		var routineDescription = document.getElementById("routineDescription").innerHTML;
		var routineCategory = document.getElementById("routineCategory").value;
		
		if(!InputCheckers.checkName(routineName)){
			document.getElementById("nameError").innerHTML = "Nazwa jest za krótka lub zawiera niedozwolone znaki!";
		}
		
		if(!InputCheckers.checkHours(routineHours)){
			document.getElementById('hoursError').innerHTML = "Czas trwania aktywności nie może wynosić 0."
		}
		
		if(InputCheckers.checkName(routineName) && InputCheckers.checkHours(routineHours))
		{
			user.routines.addRoutine(routineName,routineDays,routineTime,routineHours,routineDescription,this.outputCalories(),routineCategory)
			PopUps.closePopUp();
		}
		
		
	}
}