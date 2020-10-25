function createAccount(){

	//Get all values from form
	var username = document.getElementById("username").value;
	var weight = document.getElementById("weight").value;
	var height = document.getElementById("height").value;
	var birthyear = document.getElementById("birthyear").value;
	
	//wszystkie te zmienne tekstowe muszą być wypełnione
	if(username.length == 0){
		error.innerHTML = "Wypełnij pole pseudonimu!";
		return;
	}
	else if(weight.length == 0){
		error.innerHTML = "Wypełnij pole wagi!";
		return;
	}
	else if(height.length == 0){
		error.innerHTML = "Wypełnij pole wysokości ciała!";
		return;
	}
	else if(birthyear.length == 0){
		error.innerHTML = "Wypełnij pole roku urodzenia!";
		return;
	}
	
	//Wysokość, waga i rok urodzenia muszą być numerami
	else if(isNaN(+weight) || isNaN(+height) || isNaN(+birthyear)){
		error.innerHTML = "Jedno lub więcej pól numerycznych zawiera niedozwolone znaki!"
		return;
	}
	
	//Ustaw właściwości użytkownika
	user.setName(username);
	user.setWeight(weight);
	user.setHeight(height);
	user.setBirthYear(birthyear);
	
	//Przekieruj użytkownika na stronę główną aplikacji
	location.href="mainapp.html";
}

// Aby stworzyć efekt pojawiania się formularza
$(document).ready(function(){document.getElementById("new-user-form").
			style.opacity = 1});