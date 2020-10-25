user = {
	//Sprawdza, czy użytkownik ma podstawowe dane
	isGood: function(){
		return (localStorage.username !== undefined ||
				localStorage.username != null);
	},
	
	//Gettery i settery podstawowych danych użytkownika
		//Getter i Setter pseudonimu użytkownika
		getName: function(){
			return localStorage.username;
		},
		setName: function(name){
			localStorage.username = name;
		},
		
		//Getter i setter wagi użytkownika
		getWeight: function(){
			return localStorage.weight;
		},
		setWeight: function(weight){
			localStorage.weight = weight;
		},
		
		//Getter i setter wzrostu użytkownika
		getHeight: function(){
			return localStorage.height;
		},
		setHeight: function(height){
			localStorage.height = height;
		},
		
		//Getter i setter roku urodzenia
		getBirthYear: function(){
			return localStorage.birthyear;
		},
		setBirthYear: function(birthyear){
			localStorage.birthyear = birthyear;
		},
		
	//User calculated properties
		getBMI: function(){
			return Number.parseInt(1.0 * this.getWeight()
			/((this.getHeight()/100) * (this.getHeight()/100)));
		},
		getBMIColor: function(bmi = this.getBMI()){
			if(bmi <= 18.5){
				return "white";
			}
			else if(bmi <= 25){
				return "green";
			}
			else if(bmi <= 30){
				return "orange";
			}
			else{
				return "red";
			}
		},
	
	//Routines
		routines: {
			
		routineObjectGood: function(){
			return (localStorage.routines !== undefined 
					&& localStorage.routines != null 
					&& localStorage.routines != "null"
					&& localStorage.routines != 0);
		},
		
		routineExists: function(routineName){
			r = this.getRoutineObject();
			return r[routineName] != undefined && r[routineName] != 0;
		},
		//Getter and setter of routine object
		getRoutineObject: function(){
			if(!this.routineObjectGood()){
				this.setRoutineObject(Object());
			}
			return JSON.parse(localStorage.routines);
		},
		
		setRoutineObject: function(object){
			localStorage.routines = JSON.stringify(object);
		},
		//Create days object
		createDays: function(pon,wt,sr,cz,pt,sob,nd){
			days = Object();
			if(pon) {days.montag = true; days.day0=true;}
			if(wt) {days.tuesday = true; days.day1=true;}
			if(sr) {days.wednesday = true;days.day2=true;}
			if(cz) {days.thursday = true;days.day3=true;}
			if(pt) {days.friday = true;days.day4=true;}
			if(sob) {days.saturday = true;days.day5=true;}
			if(nd) {days.sunday = true;days.day6=true;}
			return days;
		},
		
		//Add new routine
		addRoutine: function(name, days, time, howLongTakes,
							 description, calories, category){
			//If name of the routine is already taken, add some
			//number to it
			a = 1;
			rname = name;
			while(this.routineExists(rname)){
				rname = rname + a.toString();
				a++;
			}
			name = rname;
			
			//Create routine object
			r = Object();
			
			r.name = name;
			r.days = days;
			r.time = time;
			r.howLongTakes = howLongTakes;
			r.description = description;
			r.calories = calories;
			r.category = category;
			
			obj = this.getRoutineObject();
			obj[name] = r;
			this.setRoutineObject(obj);
		},
		deleteRoutine: function(name){
			if(this.routineExists(name)){
				o = this.getRoutineObject();
				delete o[name];
				this.setRoutineObject(o);
				return true;
			}
			return false;
		},
		getRoutine(routineName){
			if(this.routineExists(routineName)){
				o = this.getRoutineObject();
				return o[routineName];
			}
			return null;
		},
		getRoutineDays: function (routine){
			m = "";
			if(routine.days.day0) m = m + "Poniedziałek ";
			if(routine.days.day1) m = m + "Wtorek ";
			if(routine.days.day2) m = m + "Środa ";
			if(routine.days.day3) m = m + "Czwartek ";
			if(routine.days.day4) m = m + "Piątek ";
			if(routine.days.day5) m = m + "Sobota ";
			if(routine.days.day6) m = m + "Niedziela ";
			return m;
		},
		daysToArray: function(days)
		{
			var arrayDays = Array()
			
			for(var i in days)
			{
				if(i) arrayDays.push(1)
				else arrayDays.push(0)
			}
			
			return arrayDays
		},
		deleteRoutineForDay: function(routineName, day){
			alert("deleteRoutineForDay nie zaimplementowane!");
		},
		//wyświetla w konsoli wszystkie rutyny
		echoRoutines: function()
		{
			var i=1
			var dayI = 0
			var daysValue = ""
			var output = ""
			jackson = JSON.parse(localStorage.routines)
			for(var r in jackson)
			{
				routine = jackson[r]
				
				for(var j in routine.days)
				{
					if(j)  daysValue += String(dayI)
					dayI++
				}
				
				output += "Routine "+ i+"\n"
				output += "Name: "+String(routine.name)+"\n"
				output += "Days: "+daysValue+"\n"
				output += "Time: "+String(routine.time)+"\n"
				output += "HowLongTakes: "+String(routine.howLongTakes)+"\n"
				output += "Calories: "+String(routine.calories)+"\n"
				output += "Category: "+String(routine.category)+"\n"
				console.log(output)
				output = ""
				i++
				dayI = 0
				daysValue = ""
			}
		},
		
		//zwraca tablice z wszystkimi rutynami
		getArrayOfRoutines: function()
		{
			var routinesArray = Array()
			var jackson = JSON.parse(localStorage.routines)
			
			for(var r in jackson)
			{
				routine = jackson[r]
				
				routinesArray.push(routine)
			}
			return routinesArray
		},
		

		//sprawdza czy rutyna koliduje z istniejącymi rutynami
		doesCollide: function(days, time, hours)
		{
			var allRoutines = user.routines.getArrayOfRoutines()
			var newDays = user.routines.daysToArray(days)
			
			for(var routine in allRoutines)
			{
				
				var existingDays = daysToArray(routine.days)
				
				for(var i =0;i<7;i++)
				{
					if(newDays[i] == existingDays[i] && newDays[i] == 1)
					{
						newStart = Number(time.split(":").join(""))
						existingStart = Number(routine.time.split(":").join(""))
						newHours = hours*100
						existingHours = routine.howLongTakes*100
						
						
						if(newStart == existingStart) return true
						if((newStart < existingStart) && (newStart+newHours >= existingStart)) return true
						if((existingStart < newStart) && (existingStart+existingHours >= newStart)) return true
					}
				}
			}
			
			return false
		},
		getRoutineType: function(routinetype){
			return this.routinetypes[routinetype].type;
		},
		
		getRoutinesForDay(num, filter){
			a = lifeplan.createLifePlan(user.routines.getRoutineObject());
			
			if(filter == "all"){
				return a[num];
			}
			
			b = {};
			d = a[num];
			for(c in d){
				if(filter == user.routines.getRoutineType(d[c].category)){
					b[c] = d[c];
				}
			}
			return b;
		},
		
		routinetypes:  {
            bieganie: {
                modifier: 9,
                type: "Sport"
            },
            rower:  {
                modifier: 6,
                type: "Sport"
            },
            fitness:  {
                modifier: 5.5,
                type: "Sport"
            },
            siłownia:  {
                modifier: 7,
                type: "Sport"
            },
            pływanie:  {
                modifier: 10,
                type: "Sport"
            },
            trekking:  {
                modifier: 4,
                type: "Sport"
            },
            tennis:  {
                modifier: 7,
                type: "Sport"
            },
			
			sniadanie:  {
                modifier: 0,
                type: "Diet"
            },
			obiad:  {
                modifier: 0,
                type: "Diet"
            },
			kolacja:  {
                modifier: 0,
                type: "Diet"
            },
			
			sprzatanie:  {
                modifier: 2,
                type: "House"
            },
			gotowanie:  {
                modifier: 1.5,
                type: "House"
            },
			kapiel:  {
                modifier: 2.5,
                type: "House"
            },
			majsterkowanie: {
				modifier: 3,
				type: "House"
			},
			telewizja:  {
                modifier: 0.3,
                type: "House"
            },
			
			grabienie:  {
                modifier: 4,
                type: "Garden"
            },
			kopanie:  {
                modifier: 6.5,
                type: "Garden"
            },
			koszenie:  {
                modifier: 3.5,
                type: "Garden"
            },
			pielenie:  {
                modifier: 4.5,
                type: "Garden"
            },
			
			
            sen:  {
                modifier: 1,
                type: "Sleep"
            },
			
			komputer:  {
                modifier: 0.7,
                type: "Work"
            },
			samochod:  {
                modifier: 1,
                type: "Work"
            },
			lekcje:  {
                modifier: 1.5,
                type: "Work"
            }
		}
	
		
	}
}
