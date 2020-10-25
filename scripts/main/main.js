//Kiedy strona się załaduje
$(document).ready(function(){
	
	//Wypełnij pola danych użytkownika
	actValues();
	
	//Ustaw datę rutyny na dzisiejszy dzień
	routineDate.valueAsDate = new Date();
	
	//Ustaw filtr przeglądarki domyślnie na wszystkie rutyny,
	//dzięki temu RoutineExplorer automatycznie załaduje się
	Filter.All();
	
	//Domyślnie na stronie zamknij listę nowych rutyn
	NewButton.closeList();
	
	//Dodaj automatyczne obliczanie kalorii w formularzu nowej rutyny
	RoutineForm.addEventDetection();
	
	//Zapisz nazwy rutyn w formularzu nowych rutyn
	RoutineForm.insertRoutinesIntoSelect();
});

//Wpisz zmienne użytkownika w odpowiednie pola na stronie
function actValues(){
	usernamePlace.innerHTML = user.getName();
	document.querySelectorAll(".bmiPlace").forEach(function(el){el.innerHTML = user.getBMI()});
	bmicol.style.color=user.getBMIColor();
	document.querySelectorAll(".weightPlace").forEach(function(el){el.innerHTML = user.getWeight()});
	document.querySelectorAll(".heightPlace").forEach(function(el){el.innerHTML = user.getHeight()});
	BMIBar.refresh();
}