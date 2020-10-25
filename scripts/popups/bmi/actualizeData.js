ActualizeData = {
	Weight: function(){
		a = prompt("Nowa waga");
		a = +a;
		if(Number.isNaN(a) || a == 0){
			alert("Waga musi być liczbą!");
		}
		else{
			user.setWeight(a);
			alert("Waga użytkownika została zaakutalizowana!");
		}
		actValues();
	},
	Height: function(){
		a = prompt("Nowa wysokość");
		a = +a;
		if(Number.isNaN(a) || a == 0){
			alert("Wysokość musi być liczbą!");
			return;
		}
		else{
			user.setHeight(a);
			alert("Wysokość użytkownika została zaakutalizowana!");
		}
		actValues();
	}
}