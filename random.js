//selection choices
var selections = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", 
"2", "3", "4", "5", "6", "7", "8", "9" ]
//Generates random Result
function randomResult(){
	var result = document.getElementById("result");
	var limit = 8;
	result.innerHTML = " ";
	
	//runs 8 times for 8 chars
	for (i = 0; i < 8; i++) {
		var index = random(0, selections.length - 1);
		result.innerHTML = result.innerHTML + selections[index];
	}
	return result;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//beijie july 2015