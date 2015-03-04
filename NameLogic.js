var name;
var currentChar;


function getName() {
    // get the name from the html file
    name = document.getElementById("name").value;
    // set current char to 0
    currentChar=0;
    // get the letters in the name
    getLetters();
}

function getLetters(){
	// find the letters in the name using the character codes
	findLetter(name.charCodeAt(currentChar));
}

function findLetter(code){
	if (code == 97){
		var img = document.createElement("img");
			img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEA.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign g
		checkA();
	}

	else if (code == 98){
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEB.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign g
		checkB();
	}

	// if the code is equal to the letter g
	else if (code == 103){
		// give the image for how to sign a g
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEG.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign g
		checkG();
	}

	else if (code == 121){
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEY.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign g
		checkY();
	}

	else{
		// sad
		document.getElementById("answer").innerHTML=("not working");
	}
}

function confirmGesture(sign){
	// if the character code matches the sign recognized
	if (sign.charCodeAt(0) == name.charCodeAt(currentChar)){
		// show that the answer is correct
		document.getElementById("answer").innerHTML=("correct");
		currentChar+=1;
		getLetters();
	}
	else{
		// wrong sign recognized
		document.getElementById("answer").innerHTML=("try again :D");
		getLetters();
	}
}
