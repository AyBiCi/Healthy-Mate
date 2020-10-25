DietForm = {
	
	createDiet: function()
	{
		var dietName = document.getElementById("dietName").value
		var dietDays = user.routines.createDays(1,1,1,1,1,1,1)
		
		var breakfastTime = document.getElementById("breakfastTime").value
		var breakfastHours = document.getElementById("breakfastHours").value
		var breakfastDescription = document.getElementById("breakfastDescription").value
		var breakfastCalories = document.getElementById("breakfastCalories").value
		
		var dinnerTime = document.getElementById("dinnerTime").value
		var dinnerHours = document.getElementById("dinnerHours").value
		var dinnerDescription = document.getElementById("dinnerDescription").value
		var dinnerCalories = document.getElementById("dinnerCalories").value
		
		var supperTime = document.getElementById("supperTime").value
		var supperHours = document.getElementById("supperHours").value
		var supperDescription = document.getElementById("supperDescription").value
		var supperCalories = document.getElementById("supperCalories").value
		
		if(InputCheckers.checkName(dietName) )
		{
			var output="";
			output+="Diet name: "+dietName+"\n"
			output+="Breakfast T "+ breakfastTime+"\n"
			output+="Breakfast H "+ breakfastHours+"\n"
			output+="Breakfast D "+ breakfastDescription+"\n"
			output+="Breakfast C "+ breakfastCalories+"\n"
			
			output+="Dinner T "+ dinnerTime+"\n"
			output+="Dinner H "+ dinnerHours+"\n"
			output+="Dinner D "+ dinnerDescription+"\n"
			output+="Dinner C "+ dinnerCalories+"\n"
			
			output+="Supper T "+ supperTime+"\n"
			output+="Supper H "+ supperHours+"\n"
			output+="Supper D "+ supperDescription+"\n"
			output+="Supper C "+ supperCalories+"\n"
		
			console.log(output)
			
			
			user.routines.addRoutine(dietName+": śniadanie",dietDays,breakfastTime,breakfastHours,breakfastDescription,breakfastCalories,"sniadanie")
			
			user.routines.addRoutine(dietName+": obiad",dietDays,dinnerTime,dinnerHours,dinnerDescription,dinnerCalories,"obiad")
			
			user.routines.addRoutine(dietName+": kolacja",dietDays,supperTime,supperHours,supperDescription,supperCalories,"kolacja")
			
			PopUps.closePopUp();
		}
		
		
	}	
}	