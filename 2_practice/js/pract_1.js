/*25. Дана строка, найти сумму имеющихся в ней цифр*/
	console.log("Дана строка, найти сумму имеющихся в ней цифр");
	var str = "odin1plus2plus3minus-3plus4ravnoSEM'zzz";
	
	function checkStr(str) 
	{
		var res = str.match(/-?[0-9]/g);
		var sum = 0;
		if (!isNaN(res)) return false;
	
		res.forEach(function(item, i, arr) 
		{
			sum += parseInt(item);
		});
	return sum;	
	}

	console.log(checkStr(str));