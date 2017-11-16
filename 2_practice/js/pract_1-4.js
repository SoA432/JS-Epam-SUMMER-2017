    var now = new Date();
    var hour = parseInt(now.getHours());
    var min = parseInt(now.getMinutes());
    var sec = parseInt(now.getSeconds());
		

function degrees(h,m,s){
			if (h>12) {
				h=h-12;
			}
			var secPos = (s*6);
			var minPos = (m*6)+(s*0.1);
			var hourPos = (h*30)+(m*0.5)+(s*(0.5/60));
			var h_m = hourPos > minPos ? hourPos-minPos : minPos - hourPos;
			var h_s = hourPos > secPos ? hourPos-secPos : secPos - hourPos;
			var m_s = minPos > secPos ? minPos-secPos : secPos - minPos;
			console.log("Между часовой и минутной стрелкой: " + h_m + " градусов. \n" + "Между часовой и секундной стрелкой: " + h_s + " градусов. \n" + "Между минутной и секундной стрелкой: " + m_s + " градусов.");
			var split = h_m + "\n" + h_s + "\n" + m_s;
		
	return split;
};

console.log(degrees(hour, min, sec));



// var time = {
// 	hour: 0,
// 	min: 0,
// 	sec: 0
// };
	
// 	time.hour = parseInt(prompt("Сколько сейчас часов? (12-ти часовой формат)"));
// 	time.min = parseInt(prompt("Сколько сейчас минут? (12-ти часовой формат)"));
// 	time.sec = parseInt(prompt("Сколько сейчас секунд? (12-ти часовой формат)"));	

// function degrees(h,m,s){
// 	if ( isNaN(h) || isNaN(m) || isNaN(s) ) return console.log("Введена не корректная дата");
// 	if (h>12 || h<=0) return console.log("Введена не корректная дата")
// 	else if (m>59 || m<0) return console.log("Введена не корректная дата")
// 	else if (s>59 || m<0) return console.log("Введена не корректная дата")
// 	else 
// 		{		
// 			console.log("Введено время: " + h + ":" + m + ":" + s + "\n")
// 			var secPos = (s*6);
// 			var minPos = (m*6)+(s*0.1);
// 			var hourPos = (h*30)+(m*0.5)+(s*(0.5/60));
// 			var h_m = hourPos > minPos ? hourPos-minPos : minPos - hourPos;
// 			var h_s = hourPos > secPos ? hourPos-secPos : secPos - hourPos;
// 			var m_s = minPos > secPos ? minPos-secPos : secPos - minPos;
// 			console.log("Между часовой и минутной стрелкой: " + h_m + " градусов. \n" + "Между часовой и секундной стрелкой: " + h_s + " градусов. \n" + "Между минутной и секундной стрелкой: " + m_s + " градусов.");
// 			var split = h_m + "\n" + h_s + "\n" + m_s;
// 		}
// 	return split;
// };

// console.log(degrees(time.hour, time.min, time.sec));

