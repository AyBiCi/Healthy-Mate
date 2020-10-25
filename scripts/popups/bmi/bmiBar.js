BMIBar = {
	//Funkcja liniowa 14 bmi = 0% margin-left, 40 bmi = 97% margin-left,
	//Co daje f(x) = 97/26 * (x - 14) dla xe<14,40> -> ye<0,97>
	bmiToPercent: function(bmi){
		//Obliczenie funkcji
		psent = 97/26 * (bmi - 14);
		
		//Zablokowanie wartości do <0,97>
		if(psent < 0) psent = 0;
		if(psent > 97) psent = 97;
		
		return psent;
	},
	//Ustawia lewy margines strzałki na pasku bmi tak, aby poprawnie wskazywał 
	//on wartość
	refresh: function(){
		bmiarrow.style["margin-left"] = this.bmiToPercent(user.getBMI())+"%";
	}
}