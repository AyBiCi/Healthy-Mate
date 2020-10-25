function TimeReader(time){
	this.hours = +(time.substring(0, time.indexOf(":")));
	this.minutes = +(time.substring(time.indexOf(":")+1));
	this.add = function(toadd){
		this.hours = this.hours + toadd.hours;
		this.minutes = this.minutes + toadd.minutes;
	}
	this.addMinutes = function(minutes){
		this.minutes += minutes;
		hours = Math.floor(this.minutes / 60);
		this.hours += hours;
		this.hours %= 24;
		this.minutes = this.minutes % 60;
	}
	this.addHours = function(hours){
		this.addMinutes(hours * 60);
	}
	this.toString = function(){
		return (this.hours < 10 ? "0" : "")+this.hours+":"+(this.minutes < 10 ? "0" : "")+this.minutes;
	}
	this.toMinutes = function(){
		return this.hours * 60 + this.minutes;
	}
	this.getTimeStamp = function(plushours){
		time = new TimeReader(this.toString());
		time.addHours(plushours);
		return this.toString() + "-" + time.toString();
	}
}