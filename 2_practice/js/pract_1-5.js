/****  Есть ряд так называемых автоморфных чисел, 
например  6252 = 390625, или 71063762 = 50543227109376   
найти сумму всех замечательных чисел до 1020  
*/

function perfecSum(lengthZ)
{
	var result = 0;
	for (var i = 1; i < lengthZ; i++) 
	{
		var base = i.toString();
		var str = Math.pow(i, 2).toString();
		var tmp = str.slice(-base.length);
		if (parseInt(i) == parseInt(tmp)) 
		{
			result+=i;
			console.log("number = " + i + " last digit " + tmp);
		}
		console.log("current sum = " + result);
	}

	return result;
};

console.log(perfecSum(10000));