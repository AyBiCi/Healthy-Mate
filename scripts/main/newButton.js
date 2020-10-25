NewButton = {
	openList: function(){
		document.getElementById("action-menu").style.opacity = 1;
		document.getElementById("action-menu").style.display = "block";
	},
	closeList: function(){
		document.getElementById("action-menu").style.opacity = 0;
		document.getElementById("action-menu").style.display = "none";
	},
	snapList: function(){
		if(document.getElementById("action-menu").style.opacity == 0){
			this.openList();
		}
		else{
			this.closeList();
		}
	}
}