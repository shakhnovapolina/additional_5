module.exports = function check(str, bracketsConfig) {
	console.log(bracketsConfig);
	console.log (str);
 
 	var stack = [];
	var n = 0;
 for (index = 0, len = str.length; index<len; index++){
	 
	bracketsConfig.forEach(function(entry) 
	{
	//	console.log(entry);
		entry.forEach(function(brack)
		{
	//		console.log('brack '+ brack );
			console.log('-----' );
				//brack is element of const
				if	(str[index] == brack)
				{
					
				console.log(entry[0] != entry[1]);
					
					/*if (entry[0] != entry[1])
					{*/
						
						if (entry.indexOf(brack) == 0 )
						{
						stack.push(str[index]);
						console.log('hello3');
						}
						else if ((entry.indexOf(brack) ==1) && (stack[stack.length-1] == entry[entry.indexOf(brack)][0]) )
						{
							stack.pop();
							console.log('hello4');
						}
					} /*else if (entry[0] == entry[1] && n==0)
						{
						if (entry.indexOf(brack) ==0 && ( stack[stack.length-1] != entry[entry.indexOf(brack)][0] ))
						{
							stack.push(str[index]);
							n++;
							console.log('hello');
						}
							else if ( stack[stack.length-1] == entry[entry.indexOf(brack)][0] && n>=1)
							{
								n--;
								stack.pop();
								console.log('hello2');
							}

					
						}
				} //if str has new symbol in sequensies*/
				else {
					
					return false;
				}

			
		});
		
});

 }
  console.log([stack]);
  if (stack.length == 0){
  return true;}
  else {return false;}
 
}
