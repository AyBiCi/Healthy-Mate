Filter = {
	name: "all",
	ColorButton: function(buttonName){
		buttons = ["buttall","buttsport","buttdiet","buttnote"];
		color = getComputedStyle(document.getElementById("footer"))["background-color"];
		buttons.forEach(function(a){
			document.getElementById(a).style = "";
		});
		
		document.getElementById(buttonName).style = "background-color:"+color;
	},
	All: function(){
		this.FilterSchema("all","buttall");
	},
	Sport: function(){
		this.FilterSchema("Sport","buttsport");
	},
	Diet: function(){
		this.FilterSchema("Diet","buttdiet");
	},
	FilterSchema: function(name,colorbutton){
		this.name = name;
		this.ColorButton(colorbutton);
		RoutineExplorer.refresh();
	}
}