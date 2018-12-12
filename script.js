

function callName()
{
	var erum = document.getElementById("firstName");
	var seong = document.getElementById("lastName");
	var fullName = erum.value + "님, 초대되었어요. 환영합니다!";

	alert(fullName);
}

function callplus()
{
	var con1 = document.getElementById("constant1");
	var con2 = document.getElementById("constant2");
	var plus = parseInt(con1.value) + parseInt(con2.value);
	var pplus = "두 수를 더하면 " + plus + "입니다.";

	alert(pplus);
}


function callminus()
{
	var con1 = document.getElementById("constant1");
	var con2 = document.getElementById("constant2");
	var minus = parseInt(con1.value) - parseInt(con2.value);
	var mminus = "두 수를 빼면 " + minus + "입니다.";

	alert(mminus);
}

function callmultiply()
{
	var con1 = document.getElementById("constant1");
	var con2 = document.getElementById("constant2");
	var multiply = parseInt(con1.value) * parseInt(con2.value);
	var mmultiply = "두 수를 곱하면 " + multiply + "입니다.";

	alert(mmultiply);
}

function calldivide()
{
	var con1 = document.getElementById("constant1");
	var con2 = document.getElementById("constant2");
	var divide = parseInt(con1.value) / parseInt(con2.value);
	var divide2 = parseInt(con1.value)%parseInt(con2.value);

	var ddivide = "두 수를 나눈 값은 " + divide + ", 나머지는" + divide2 + "입니다.";
	
	alert(ddivide);
}


function callaver()
{
	var con1 = document.getElementById("constant1");
	var con2 = document.getElementById("constant2");
	var average = (parseInt(con1.value) + parseInt(con2.value))/2;

	alert(average);
}

