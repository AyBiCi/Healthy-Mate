Test = {
	m: "",
	assertEquals: function(obj, exp, info){
		good = (obj == exp);
		if(good){
			this.m = this.m + '<font color="lightgreen">';
		}
		else{
			this.m = this.m + '<font color="red">';
		}
		
		this.m = this.m + "<br> Assert equal of: "+info+" - "+(good ? "success" : "fail")+", "+obj+" "+(good ? "=" : "!=")+" "+exp+"</font><br>";
	},
	showResults: function(){
		document.write(this.m);
	}
}