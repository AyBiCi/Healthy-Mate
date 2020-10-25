//Obiekt, który obsługuje wyświetlanie rutyn na głównej stronie aplikacji
RoutineExplorer = {
	
	//Tworzy ciąg znaków, który jest pojedyńczym div'em na liście
	//eksploratora rutyn
	createRoutineDiv: function(routine){
		time = new TimeReader(routine.time);
		return '<div class="routine button2" onclick=\'PopUps.openRoutine("'+routine.name+'")\'><div class="name">'
			   +routine.name+'</div><div class="time">'
			   +time.getTimeStamp(+routine.howLongTakes)+'</div></div>';
	},
	
	allRoutines: function(r = user.routines.getRoutineObject()){
		r = Object.values(r);
		r = r.sort(function(el1, el2){
			t1 = new TimeReader(el1.time);
			t2 = new TimeReader(el2.time);
			t1 = t1.toMinutes();
			t2 = t2.toMinutes();
			
			
			if(t1 > t2)return 1;
			else if(t1 == t2) return 0;
			else return -1;
		});
		m = "";
		
		if(Object.keys(r).length == 0) {
			m = "<H1> Brak rutyn na ten dzień </h1>";
		}
		else for(routine in r){
			m = m + this.createRoutineDiv(r[routine]);
		}
		this.updateWeekDay();
		
		document.getElementById("main").innerHTML = m;
	},
	byRoutineDate: function(date = routineDate.valueAsDate){
		a = lifeplan.createLifePlan(user.routines.getRoutineObject());
		var num = (date.getDay()-1 == -1 ? 6 : date.getDay()-1);
		
		if(Filter.name == "all"){
			this.allRoutines(a[num]);
			caloryBilans.innerHTML = CaloriesCount.endOfDayBilans(num)
			return;
		}
		
		b = {};
		d = a[num];
		for(c in d){
			if(Filter.name == user.routines.getRoutineType(d[c].category)){
				b[c] = d[c];
			}
		}
		
		this.allRoutines(b);
		caloryBilans.innerHTML = CaloriesCount.endOfDayBilans(num)
	},
	updateWeekDay: function(){
		weekday.innerHTML = ([ "Niedziela","Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"])[routineDate.valueAsDate.getDay()];
	},
	refresh: function(){
		this.byRoutineDate();
	}
}