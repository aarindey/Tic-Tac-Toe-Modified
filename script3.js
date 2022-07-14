var square1
var square2
var square3
var square4
var square5
var square6
var square7
var square8
var square9
//keeps track of moves
var moves = 0

var IDs =["square1", "square2","square3", "square4","square5", "square6","square7", "square8","square9"];


//handle a click on a cell/square
function clicker(id) {


//check if moves are even, for user X
if (moves==0 || moves==2 || moves%2== 0){
	document.getElementById(id).innerHTML="X"
	

}
//else must be user O
else document.getElementById(id).innerHTML="O"

document.getElementById(id).onclick=null
	
moves++

if (moves == 9) {
		userX();
		document.getElementById("h1").innerHTML="IT IS A DRAW!"
		unclick()

	}

userX()

}


function state() {
//make variables for individual cells, to make statements
//easier for readibility 

square1 = document.getElementById("square1").innerHTML
square2 = document.getElementById("square2").innerHTML
square3 = document.getElementById("square3").innerHTML
square4 = document.getElementById("square4").innerHTML
square5 = document.getElementById("square5").innerHTML
square6 = document.getElementById("square6").innerHTML
square7 = document.getElementById("square7").innerHTML
square8 = document.getElementById("square8").innerHTML
square9 = document.getElementById("square9").innerHTML

}

//checks for userX victory
function userX(){

	state();

	if (square1 == "X" && square2 =="X" && square3 == "X"){
		document.getElementById("h1").innerHTML="USER X WINS!"
		unclick()

		
	}

	if (square4 == "X" && square5 =="X" && square6 == "X"){
		document.getElementById("h1").innerHTML="USER X WINS!"
		unclick()


	}

	if (square7== "X" && square8 =="X" && square9== "X"){
		document.getElementById("h1").innerHTML="USER X WINS!"
		unclick()


	}


	if (square1 == "X" && square5 =="X" && square9 == "X"){
		document.getElementById("h1").innerHTML="USER X WINS!"
		unclick()


	}

	if (square1 == "X" && square4 =="X" && square7 == "X"){
		document.getElementById("h1").innerHTML="USER X WINS!"
		unclick()


	}
	if (square2 == "X" && square5 =="X" && square8== "X"){
		document.getElementById("h1").innerHTML="USER X WINS!"
		unclick()


	}
	if (square3 == "X" && square6 =="X" && square9 == "X"){
		document.getElementById("h1").innerHTML="USER X WINS!"
		unclick()

	}

	if (square7 == "X" && square5 =="X" && square3 == "X"){
		document.getElementById("h1").innerHTML="USER X WINS!"
		unclick()


	}


	userO()



}


//analyzes to see whether userO won
function userO(){


	if (square1 == "O" && square2 =="O" && square3 == "O"){
		document.getElementById("h1").innerHTML="USER O WINS!"
		unclick()
	}


	if (square4 == "O" && square5 =="O" && square6 == "O"){
		document.getElementById("h1").innerHTML="USER O WINS!"
		unclick()

	}

	if (square7== "O" && square8 =="O" && square9== "O"){
		document.getElementById("h1").innerHTML="USER O WINS!"
		unclick()
	}

	if (square1 == "O"&& square5 =="O" && square9 == "O"){
		document.getElementById("h1").innerHTML="USER O WINS!"
		unclick()

	}

	if (square1 == "O" && square4 =="O" && square7 == "O"){
		document.getElementById("h1").innerHTML="USER O WINS!"
		unclick()

	}
	if (square2 == "O" && square5 =="O" && square8== "O"){
		document.getElementById("h1").innerHTML="USER O WINS!"
		unclick()
		
	}
	if (square3 == "O"&& square6 =="O"&& square9 == "O"){
		document.getElementById("h1").innerHTML="USER O WINS!"
		unclick()

	}

	if (square7 == "O" && square5 =="O" && square3 == "O"){
		document.getElementById("h1").innerHTML="USER O WINS!"
		unclick()

	}
	

	


}

//Makes all squares unclickable
function unclick(){
	for (var i = 1; i <10; i++) {
		document.getElementById("square" + i).onclick =null
	};
}




function clickerAI(id) {

	document.getElementById(id).innerHTML="X"

	document.getElementById(id).onclick=null

	var index = IDs.indexOf(id)

	IDs.splice(index, 1)


	moves++


	if (moves < 8) {
		AI()
	}
	


	if (moves == 9) {
		document.getElementById("h1").innerHTML="IT IS A DRAW!"
		unclick()

	}

	moves++
	userX()

	


}


//AI figures out where to make its move
function AI(){

	len = IDs.length - 1
	rand = Math.random()
	random = Math.round(rand * len)


	target = IDs[random]
	document.getElementById(target).innerHTML="O"
	document.getElementById(target).onclick=null

	index = IDs.indexOf(target)
	IDs.splice(index, 1)


	


}




//Refreshes the page 
function restart(){

	location.reload()

}

