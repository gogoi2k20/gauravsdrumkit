
var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for (var i = 0; i <numberOfDrumButtons ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    	this.style.color="black";
   var buttonInnerHTML=this.innerHTML;
	switch(buttonInnerHTML){

		case "w":

		  var tom1=new Audio("sounds/tom-1.mp3");
		  tom1.play();
		  break;
	
		//switch(buttonInnerHTML){
		case "a":
		  var tom2=new Audio("sounds/tom-2.mp3");
		 tom2.play();
		  break;
	//}
		//switch(buttonInnerHTML){
		case "s":
		  var tom3=new Audio("sounds/tom-3.mp3");
		 tom3.play();
		  break;
	//}
		//switch(buttonInnerHTML){
		case "d":
		  var tom4=new Audio("sounds/tom-4.mp3");
		  tom4.play();
		  break;
//	}
	//	switch(buttonInnerHTML){
		case "j":
		  var crash=new Audio("sounds/crash.mp3");
		  crash.play();
		  break;
//	}
	//	switch(buttonInnerHTML){
		case "l":
		  var kickbass=new Audio("sounds/kick-bass.mp3");
		kickbass.play();
		  break;
//	}
	//	switch(buttonInnerHTML){
		case "k":
		  var snare =new Audio("sounds/snare.mp3");
		snare.play();
		  break;
//	}
 //  function play_it(){ var audio = new Audio("sounds/tom-1.mp3");
}
});
}

    

//function play_it(){
	//
	
//}
//}