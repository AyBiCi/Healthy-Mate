PopUps = {
	popUpSite: function(name){
		f = ["poproutine","popbmi","popadnot","popdiet","poproutineinfo"];
		f.forEach(function(a) {
			document.getElementById(a).style.display = "none";
		});
		document.getElementById(name).style.display = "block";
		popup.style.display = "block";
		popup.style.opacity = 1;
	},
	closePopUp: function(){
		popup.style.opacity = 0;
		popup.style.display = "none";
		RoutineExplorer.refresh();
	},
	openRoutine: function(routineName){
		r = user.routines.getRoutine(routineName);
		RoutineInfo.updateRoutineForm(r);
		this.popUpSite("poproutineinfo");
	}
}