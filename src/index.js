module.exports = function check(str, bracketsConfig) {

 let stack = [];
 for (index = 0, len = str.length; index<len; index++){
	bracketsConfig.forEach(function(entry, index1) 
	{ 	
		const firstBrack = entry[0];
		const secondBrack = entry[1];
		const item = str[index];

		if (firstBrack !== secondBrack)
		{
			if (item == firstBrack  ) 
				stack.push(item);
			else if (item == secondBrack &&  (stack[stack.length-1] ==  firstBrack) && stack.length !== 0)
				stack.pop();
			else if (item == secondBrack )
				stack.push(item);
		} else if (firstBrack == secondBrack )
		{
	
			if (stack[stack.length-1]  != firstBrack && item == firstBrack )
				stack.push(item);
			else if (stack[stack.length-1]  == secondBrack && item == firstBrack  )
				stack.pop();
		}
	});
}	
	if (stack.length == 0)
		return true;
	else 
		return false;
}


