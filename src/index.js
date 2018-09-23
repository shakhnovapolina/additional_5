module.exports = function check(str, bracketsConfig) {

 var stack = [];
 for (index = 0, len = str.length; index<len; index++){
	 
	bracketsConfig.forEach(function(entry) 
	{
		entry.forEach(function(brack)
		{
				//brack is element of const
				if	(str[index] == brack)
				{
						if (entry.indexOf(brack) == 0 )
						{
						stack.push(str[index]);
						}
						else if ((entry.indexOf(brack) ==1))
						{
							stack.pop();
						}
					 
				} //if str has new symbol in sequensies
				else {
					return false;
				}
//I need to made cycle with the first bracket == the second, and I'll do this 
			
		});
		
});

 }
 console.log(stack);
  if (stack.length == 0){
	  return true;
  }
  else {
	  return false;
	  }
 
}
