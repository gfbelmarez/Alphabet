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
	// if A
	if (code == 97){
		var img = document.createElement("img");
			img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEA.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign g
		checkA();
	}

	// if B 
	else if (code == 98){
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEB.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign g
		checkB();
	}

	// if C
	else if (code == 99){
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEC.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign c
		checkC();
	}

	// if D
	else if (code == 100){
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGED.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign d
		checkD();
	}

	// if E
	else if (code == 101){
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEE.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign e
		checkE();
	}

	// if F
	else if (code == 102){
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEF.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign f
		checkF();
	}

	// if G
	else if (code == 103){
		// give the image for how to sign a g
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEG.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign g
		//checkG();
	}

	// if H
	else if (code == 104){
		// give the image for how to sign a g
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEH.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign h
		//checkH();
	}

	// if I
	else if (code == 105){
		// give the image for how to sign a g
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEI.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign i
		checkI();
	}

	// if J
	else if (code == 106){
		// give the image for how to sign a J
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEJ.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign j
		checkJ();
	}

	// if K
	else if (code == 107){
		// give the image for how to sign a K
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEK.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign K
		checkK();
	}

	// if L
	else if (code == 108){
		// give the image for how to sign a L
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEL.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign L
		//checkL();
	}

	// if M
	else if (code == 109){
		// give the image for how to sign a M
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEM.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign M
		//checkM();
	}

	// if N
	else if (code == 110){
		// give the image for how to sign a N
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEN.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign N
		//checkN();
	}

	// if O
	else if (code == 111){
		// give the image for how to sign a O
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEO.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign O
		//checkO();
	}

	// if P
	else if (code == 112){
		// give the image for how to sign a O
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEO.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign O
		//checkO();
	}

	// if Q
	else if (code == 113){
		// give the image for how to sign a Q
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEQ.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign Q
		//checkQ();
	}

	// if R
	else if (code == 114){
		// give the image for how to sign a R
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGER.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign R
		//checkR();
	}

	// if S
	else if (code == 115){
		// give the image for how to sign a R
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGES.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign S
		//checkS();
	}

	// if T
	else if (code == 116){
		// give the image for how to sign a T
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGET.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign T
		//checkT();
	}

	// if U
	else if (code == 117){
		// give the image for how to sign a U
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEU.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign U
		//checkU();
	}

	// if V
	else if (code == 118){
		// give the image for how to sign a V
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEV.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign V
		//checkV();
	}

	// if W
	else if (code == 119){
		// give the image for how to sign a V
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEW.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign W
		//checkW();
	}

	// if X
	else if (code == 120){
		// give the image for how to sign a X
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEX.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign X
		//checkX();
	}

	// if y
	else if (code == 121){
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEY.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign g
		checkY();
	}

	// if z
	else if (code == 122){
		// give the image for how to sign a Z
		var img = document.createElement("img");
		img.src = "http://www.jenriggio.com/MULTIMEDIA_ASL/asl_alphabet/large_letters/LARGEZ.GIF";
		// add the image to the html
		var src = document.getElementById("answer");
		src.appendChild(img);
		// check for the sign Z
		//checkZ();
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
		document.getElementById("answer").innerHTML=("Signed" + sign);
		getLetters();
	}
}
