function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
		
async function redirectToNewUserPage(){
	await sleep(1000);
	title.style.opacity = '0';
	loder.style.display = "none";
	await sleep(1000);
	title.style = "margin-top: 100px;";
	title.innerHTML = "Nowy w aplikacji?";
	await sleep(2000);
	title.style.opacity = '0';
	await sleep(1000);
	location.href = "newuser.html";
}

function mainLoading(){
			
	//sprawdź, czy przeglądarka obsługuje HTML 5 Web Storage
	if (typeof(Storage) == "undefined") 
			//Jeżeli nie, poproś użytkownika o zmianę przeglądarki
			location.href = "usenewerbrowser.html"; 
			
		//sprawdź, czy użytkownik wypełnił formularz nowego użytkownika
	if(user.isGood())
		location.href = "mainapp.html"; // przenieś go do aplikacji	
	else // W przeciwnym wypadku przenieś go na stronę nowego użytkownika
		redirectToNewUserPage();
}
$(document).ready(mainLoading()); //Uruchom funkcję po załadowaniu strony