
setInterval(count,30)

function count()
{
	var s = document.getElementById("s").innerText;

	var m = document.getElementById("m").innerText;

	var h = document.getElementById("h").innerText;

	var formet = document.getElementById("ap").innerText;

	

	s++;
	if(s==10){

		s=0;
		m++;
		if (m==10) {

			m=0;
			h++;
		}
		if(h>=12)
		{
			h=13;
			h++;
			formet="PM";

		
		}if(h==24)
		{
			h=0;
			h++;
			formet="AM";

		}

	}

	document.getElementById("s").innerText =s;
	document.getElementById("m").innerText =m;
	document.getElementById("h").innerText =h;
	document.getElementById("ap").innerText =formet;


}