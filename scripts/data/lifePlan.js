lifeplan = {
	createLifePlan: function(routines){
		days = [monday={}, tuesday={}, wednesday={}, thursday={},
				friday={}, saturday={}, sunday={}];
				
		for(r in routines){
			routine = routines[r];
			for(i=0;i<=6;i++){
				if(routine.days["day"+i] == true){
					days[i][routine.name] = routine;
				}
			}
		}
		
		return days;
	},
	createLifePlanForDay: function(date){
		a = lifeplan.createLifePlan(user.routines.getRoutineObject());
		var num = (date.getDay()-1 == -1 ? 6 : date.getDay()-1);
		return(a[num]);
	}
}