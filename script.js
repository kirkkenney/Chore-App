var next = document.getElementById('next');
var prev = document.getElementById('prev');
var list = document.getElementsByClassName('listCont');
var openInput = document.getElementById('inputCont');
var submit = document.getElementById('submit');
var listCont = document.getElementsByClassName('listCont');


function init() {
	date = new Date();
	currentDay = date.getDay();
	days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	document.getElementById('dayText').textContent = days[currentDay];
	list[currentDay].style.display = "block";
	var allItems = JSON.parse(localStorage.getItem("allList"));
	if (allItems == null) allItems = [];
	var i;
	var x;
	for (i = 0; i < listCont.length; i++) {
		for (x = 0; x < allItems.length; x++) {
			var li = document.createElement("li");
			var button = document.createElement("button");
			var del = document.createElement("button");
			var text = document.createElement("span");
			li.appendChild(text);
			li.appendChild(button);
			li.insertBefore(del, button);
			li.insertBefore(text, button)
			text.classList.add("chore");
			text.innerHTML = allItems[x];
			button.classList.add("tick");
			button.innerHTML = "&#10004;"
			del.classList.add("delete");
			del.innerHTML = "&times;";
			listCont[i].children[0].appendChild(li);	
		}
	}
	var satItems = JSON.parse(localStorage.getItem("satList"));
	if (satItems == null) satItems = [];
	for (i = 0; i < satItems.length; i++) {
			var li = document.createElement("li");
			var button = document.createElement("button");
			var del = document.createElement("button");
			var text = document.createElement("span");
			li.appendChild(text);
			li.appendChild(button);
			li.insertBefore(del, button);
			li.insertBefore(text, button)
			text.classList.add("chore");
			text.innerHTML = satItems[i];
			button.classList.add("tick");
			button.innerHTML = "&#10004;"
			del.classList.add("delete");
			del.innerHTML = "&times;";
			listCont[6].children[0].appendChild(li);		
	}
	var friItems = JSON.parse(localStorage.getItem("friList"));
	if (friItems == null) friItems = [];
	for (i = 0; i < friItems.length; i++) {
			var li = document.createElement("li");
			var button = document.createElement("button");
			var del = document.createElement("button");
			var text = document.createElement("span");
			li.appendChild(text);
			li.appendChild(button);
			li.insertBefore(del, button);
			li.insertBefore(text, button)
			text.classList.add("chore");
			text.innerHTML = friItems[i];
			button.classList.add("tick");
			button.innerHTML = "&#10004;"
			del.classList.add("delete");
			del.innerHTML = "&times;";
			listCont[5].children[0].appendChild(li);	
	}	
	var thursItems = JSON.parse(localStorage.getItem("thursList"));
	if (thursItems == null) thursItems = [];
	for (i = 0; i < thursItems.length; i++) {
			var li = document.createElement("li");
			var button = document.createElement("button");
			var del = document.createElement("button");
			var text = document.createElement("span");
			li.appendChild(text);
			li.appendChild(button);
			li.insertBefore(del, button);
			li.insertBefore(text, button)
			text.classList.add("chore");
			text.innerHTML = thursItems[i];
			button.classList.add("tick");
			button.innerHTML = "&#10004;"
			del.classList.add("delete");
			del.innerHTML = "&times;";
			listCont[4].children[0].appendChild(li);		
	}
	var wedsItems = JSON.parse(localStorage.getItem("wedsList"));
	if (wedsItems == null) wedsItems = [];
	for (i = 0; i < wedsItems.length; i++) {
			var li = document.createElement("li");
			var button = document.createElement("button");
			var del = document.createElement("button");
			var text = document.createElement("span");
			li.appendChild(text);
			li.appendChild(button);
			li.insertBefore(del, button);
			li.insertBefore(text, button)
			text.classList.add("chore");
			text.innerHTML = wedsItems[i];
			button.classList.add("tick");
			button.innerHTML = "&#10004;"
			del.classList.add("delete");
			del.innerHTML = "&times;";
			listCont[3].children[0].appendChild(li);		
	}	
	var tuesItems = JSON.parse(localStorage.getItem("tuesList"));
	if (tuesItems == null) tuesItems = [];
	for (i = 0; i < tuesItems.length; i++) {
			var li = document.createElement("li");
			var button = document.createElement("button");
			var del = document.createElement("button");
			var text = document.createElement("span");
			li.appendChild(text);
			li.appendChild(button);
			li.insertBefore(del, button);
			li.insertBefore(text, button)
			text.classList.add("chore");
			text.innerHTML = tuesItems[i];
			button.classList.add("tick");
			button.innerHTML = "&#10004;"
			del.classList.add("delete");
			del.innerHTML = "&times;";
			listCont[2].children[0].appendChild(li);		
	}
	var monItems = JSON.parse(localStorage.getItem("monList"));
	if (monItems == null) monItems = [];
	for (i = 0; i < monItems.length; i++) {
			var li = document.createElement("li");
			var button = document.createElement("button");
			var del = document.createElement("button");
			var text = document.createElement("span");
			li.appendChild(text);
			li.appendChild(button);
			li.insertBefore(del, button);
			li.insertBefore(text, button)
			text.classList.add("chore");
			text.innerHTML = monItems[i];
			button.classList.add("tick");
			button.innerHTML = "&#10004;"
			del.classList.add("delete");
			del.innerHTML = "&times;";
			listCont[1].children[0].appendChild(li);			
	}
	var sunItems = JSON.parse(localStorage.getItem("sunList"));
	if (sunItems == null) sunItems = [];
	for (i = 0; i < sunItems.length; i++) {
			var li = document.createElement("li");
			var button = document.createElement("button");
			var del = document.createElement("button");
			var text = document.createElement("span");
			li.appendChild(text);
			li.appendChild(button);
			li.insertBefore(del, button);
			li.insertBefore(text, button)
			text.classList.add("chore");
			text.innerHTML = sunItems[i];
			button.classList.add("tick");
			button.innerHTML = "&#10004;"
			del.classList.add("delete");
			del.innerHTML = "&times;";
			listCont[0].children[0].appendChild(li);			
	}					
	buttonToggle();
	deleteToggle();
}
init();

function clearStorage() {
	localStorage.clear();
	var ul = document.getElementsByTagName("ul");
	var i;
	for (i = 0; i < ul.length; i++) {
		ul[i].innerHTML = "";
	} 
}
function changeDay(n) {	
	currentDay += n;
	if (currentDay > 6) {
		currentDay = 0;
	} 
	if (currentDay < 0) {
		currentDay = 6;
	}
	var i;
	for (i = 0; i < list.length; i++) {
		list[i].style.display = "none";
	}
	document.getElementById('dayText').textContent = days[currentDay];
	list[currentDay].style.display = "block";
}
function inputScreen() {
	document.getElementById('inputScreen').style.display = "block";
	document.getElementById('close').addEventListener("click", function() {
	document.getElementById('inputScreen').style.display = "none";	
	document.getElementById('errorMsg').textContent = "";
	dayChoice.style.border = "solid 1px white";
	input.style.border = "solid 1px white";
	});
}
function addChore() {
	var input = document.getElementById('input');
	var dayChoice = document.getElementById('dayChoice');
	var li = document.createElement("li");
	var button = document.createElement("button");
	var del = document.createElement("button");
	var text = document.createElement("span");
	text.classList.add("chore");
	text.innerHTML = input.value;
	button.classList.add("tick");
	button.innerHTML = "&#10004;"
	del.classList.add("delete");
	del.innerHTML = "&times;";
	if (input.value.length == 0 || dayChoice.value == 10) {
		return false;
	}
	if (dayChoice.value == 7) {
		var i;
		for (i = 0; i < listCont.length; i++) {
			var li = document.createElement("li");
			var button = document.createElement("button");
			var del = document.createElement("button");
			var text = document.createElement("span");
			text.classList.add("chore");
			text.innerHTML = input.value;
			button.classList.add("tick");
			button.innerHTML = "&#10004;"
			del.classList.add("delete");
			del.innerHTML = "&times;";
			li.appendChild(text);
			li.appendChild(button);
			li.insertBefore(del, button);
			li.insertBefore(text, button)
			listCont[i].children[0].appendChild(li);
		var allItems = JSON.parse(localStorage.getItem("allList"));
		}
		if (allItems == null) {
			allItems = [];
			}
		allItems.push(input.value);
		localStorage.setItem("allList", JSON.stringify(allItems));
	} else if (dayChoice.value == 6) {
			li.appendChild(text);
			li.appendChild(button);
			li.insertBefore(del, button);
			li.insertBefore(text, button)
			listCont[6].children[0].appendChild(li);
		var satItems = JSON.parse(localStorage.getItem("satList"));
		if (satItems == null) {
			satItems = [];
		}
		satItems.push(input.value);
		localStorage.setItem("satList", JSON.stringify(satItems));
	} else if (dayChoice.value == 5) {
			li.appendChild(text);
			li.appendChild(button);
			li.insertBefore(del, button);
			li.insertBefore(text, button)
			listCont[5].children[0].appendChild(li);
		var friItems = JSON.parse(localStorage.getItem("friList"));
		if (friItems == null) {
			friItems = [];
		}
		friItems.push(input.value);
		localStorage.setItem("friList", JSON.stringify(friItems));
	} else if (dayChoice.value == 4) {
			li.appendChild(text);
			li.appendChild(button);
			li.insertBefore(del, button);
			li.insertBefore(text, button)
			listCont[4].children[0].appendChild(li);
		var thursItems = JSON.parse(localStorage.getItem("thursList"));
		if (thursItems == null) {
			thursItems = [];
		}
		thursItems.push(input.value);
		localStorage.setItem("thursList", JSON.stringify(thursItems));
	} else if (dayChoice.value == 3) {
			li.appendChild(text);
			li.appendChild(button);
			li.insertBefore(del, button);
			li.insertBefore(text, button)
			listCont[3].children[0].appendChild(li);
		var wedsItems = JSON.parse(localStorage.getItem("wedsList"));
		if (wedsItems == null) {
			wedsItems = [];
		}
		wedsItems.push(input.value);
		localStorage.setItem("wedsList", JSON.stringify(wedsItems));
	} else if (dayChoice.value == 2) {
			li.appendChild(text);
			li.appendChild(button);
			li.insertBefore(del, button);
			li.insertBefore(text, button)
			listCont[2].children[0].appendChild(li);
		var tuesItems = JSON.parse(localStorage.getItem("tuesList"));
		if (tuesItems == null) {
			tuesItems = [];
		}
		tuesItems.push(input.value);
		localStorage.setItem("tuesList", JSON.stringify(tuesItems));
	} else if (dayChoice.value == 1) {
			li.appendChild(text);
			li.appendChild(button);
			li.insertBefore(del, button);
			li.insertBefore(text, button)
			listCont[1].children[0].appendChild(li);
		var monItems = JSON.parse(localStorage.getItem("monList"));
		if (monItems == null) {
			monItems = [];
		}
		monItems.push(input.value);
		localStorage.setItem("monList", JSON.stringify(monItems));
	} else if (dayChoice.value == 0) {
			li.appendChild(text);
			li.appendChild(button);
			li.insertBefore(del, button);
			li.insertBefore(text, button)
			listCont[0].children[0].appendChild(li);
		var sunItems = JSON.parse(localStorage.getItem("sunList"));
		if (sunItems == null) {
			sunItems = [];
		}
		sunItems.push(input.value);
		localStorage.setItem("sunList", JSON.stringify(sunItems));
	}			
	input.value = "";
	input.placeholder = "What needs to be done?"
	dayChoice.value = 10;
	document.getElementById('inputScreen').style.display = "none";
	buttonToggle();
	deleteToggle();
}
function buttonToggle() {
	var btn = document.getElementsByClassName("tick");
	var y;
	for (y = 0; y < btn.length; y++) {
		btn[y].addEventListener("click", completeTask);
	}
} 
function deleteToggle() {
	var btn = document.getElementsByClassName("delete");
	var x;
	for (x = 0; x < btn.length; x++) {
		btn[x].addEventListener("click", deleteTask);
	}
}
function completeTask() {
	var i;
	var li = document.getElementsByTagName("li");
	var audio = document.getElementById("audio");
	for (i = 0; i < li.length; i++) {
		var animate = this.parentNode;
		animate.classList.toggle("hide");
		audio.volume = 1;
		audio.currentTime = .5;
		audio.play();
		setTimeout(function() {
			animate.style.display = "none";
		}, 600);
	}
}

function deleteTask() {
	var animate = this.parentNode;
	var allItems = JSON.parse(localStorage.getItem("allList"));
	var sunItems = JSON.parse(localStorage.getItem("sunList"));
	var monItems = JSON.parse(localStorage.getItem("monList"));
	var tuesItems = JSON.parse(localStorage.getItem("tuesList"));
	var wedsItems = JSON.parse(localStorage.getItem("wedsList"));
	var thursItems = JSON.parse(localStorage.getItem("thursList"));
	var friItems = JSON.parse(localStorage.getItem("friList"));
	var satItems = JSON.parse(localStorage.getItem("satList"));
	if (allItems == null) allItems = [];
	if (sunItems == null) sunItems = [];
	if (monItems == null) monItems = [];
	if (tuesItems == null) tuesItems = [];
	if (wedsItems == null) wedsItems = [];
	if (thursItems == null) thursItems = [];
	if (friItems == null) friItems = [];
	if (satItems == null) satItems = [];
	if (satItems.includes(this.nextSibling.innerHTML) == true) {
		satIndex = satItems.indexOf(this.nextSibling.innerHTML);
		satItems.splice(satIndex, 1);
		localStorage.setItem("satList", JSON.stringify(satItems));
	} else if (friItems.includes(this.nextSibling.innerHTML) == true) {
		friIndex = friItems.indexOf(this.nextSibling.innerHTML);
		friItems.splice(friIndex, 1);
		localStorage.setItem("friList", JSON.stringify(friItems));
	}  else if (thursItems.includes(this.nextSibling.innerHTML) == true) {
		thursIndex = thursItems.indexOf(this.nextSibling.innerHTML);
		thursItems.splice(thursIndex, 1);
		localStorage.setItem("thursList", JSON.stringify(thursItems));
	}  else if (wedsItems.includes(this.nextSibling.innerHTML) == true) {
		wedsIndex = wedsItems.indexOf(this.nextSibling.innerHTML);
		wedsItems.splice(wedsIndex, 1);
		localStorage.setItem("wedsList", JSON.stringify(wedsItems));
	}  else if (tuesItems.includes(this.nextSibling.innerHTML) == true) {
		tuesIndex = tuesItems.indexOf(this.nextSibling.innerHTML);
		tuesItems.splice(tuesIndex, 1);
		localStorage.setItem("tuesList", JSON.stringify(tuesItems));
	}  else if (monItems.includes(this.nextSibling.innerHTML) == true) {
		monIndex = monItems.indexOf(this.nextSibling.innerHTML);
		monItems.splice(monIndex, 1);
		localStorage.setItem("monList", JSON.stringify(monItems));
	}  else if (sunItems.includes(this.nextSibling.innerHTML) == true) {
		sunIndex = sunItems.indexOf(this.nextSibling.innerHTML);
		sunItems.splice(sunIndex, 1);
		localStorage.setItem("sunList", JSON.stringify(sunItems));
	}  else if (allItems.includes(this.nextSibling.innerHTML) == true) {
		allIndex = allItems.indexOf(this.nextSibling.innerHTML);
		allItems.splice(allIndex, 1);
		localStorage.setItem("allList", JSON.stringify(allItems));
		animate.classList.toggle("hide");
		setTimeout(function() {
		animate.style.display = "none";
		}, 600);
		window.location.reload();
	}  	
	animate.classList.toggle("hide");
	audio.volume = 1;
	audio.currentTime = .5;
	audio.play();
	setTimeout(function() {
		animate.style.display = "none";
	}, 600);				
} 



next.addEventListener("click", function() {
	changeDay(1);
});
prev.addEventListener("click", function() {
	changeDay(-1);
});
openInput.addEventListener("click", inputScreen);
submit.addEventListener("click", addChore);
document.getElementById("clear").addEventListener("click", clearStorage);
