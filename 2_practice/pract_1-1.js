	/**. pract_1.js
Реализовать функцию для проверки пин-кода (с помощью замыканий)
Функция инициализируется пин кодом и макс числом  повторов
При последующих вызовах передается значение пин кода и возвращается true или false
*/

	console.log("Пин-код");
	var pinOrigin = 555;
	var count = 3;
	var currentCount = 1;
	function checkPinCode(pin)
	{
		
		if (pin != pinOrigin) 
			{
				if (currentCount >= count) 
				{
					currentCount++;
					return false;
				}
				else 
				{
					currentCount++;
					return false;
				}

			}
		else if ((pin == pinOrigin) && (currentCount>3)) return false
		else
		{
			currentCount = 1;
			return true;
		}
	};
	

	console.log(checkPinCode(111));	//false
	console.log(checkPinCode(555));	//true
	console.log(checkPinCode(555));	//true
	console.log(checkPinCode(111));	//false
	console.log(checkPinCode(111));	//false
	console.log(checkPinCode(555));	//true
	console.log(checkPinCode(111));	//false
	console.log(checkPinCode(555));	//true
	console.log(checkPinCode(111));	//false
	console.log(checkPinCode(111));	//false
	console.log(checkPinCode(555));	//true
	console.log(checkPinCode(111));	//false
	console.log(checkPinCode(111));	//false
	console.log(checkPinCode(111));	//false
	console.log(checkPinCode(111));	//false
	console.log(checkPinCode(555));	//false
	var currentCount = 1; // Обнулил счетчик для теста
