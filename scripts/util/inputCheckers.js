InputCheckers = {
	checkName: function(name)
	{
		var pattern = /^(?=.*['"]).{1,}$/

		if(name.length<1)
			return false;

		if(pattern.test(name.value)) 
			return false;
		
		return true;
	},

	//sprawdza poprawność czasu trwania aktywności
	checkHours: function(hours)
	{
		if(!hours) 
		{
			return false;
		}
		
		return true;
	}
	
}