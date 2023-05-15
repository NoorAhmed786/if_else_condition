//qustn 1
var A=65;
var Z=90; 
var a=97 ;
var z=122;

var userInput=prompt("enter a numer or string");
if (userInput === A)

//qustn 3
// var num=parseInt(prompt("enter a number"));
// if()

// qustn 5
var userInput1=prompt("tell me a password ");
var userInput2=prompt("tell me a password ");
if( userInput1.length == 0 ){
    alert("please enter your password");

}else if(userInput1 === userInput2){
    alert("Correct! The password you entered matches the original password. Show Incorrect password” otherwise");
}else{
    alert("your both password are not same");
}

// qustn 6

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
// qustn 2
var num1=parseInt(prompt("enter a number"));
var num2=parseInt(prompt("enter a number"));
var num3=num1+num2;
if(num1>num2){
    alert("num1:"+num1, "is greater than");
}else if(num2>num1){
    alert("num2:"+ num2 ,"is greater than");
}else{
    alert("both numbers are equal");
}

//qustn 7

let time = parseInt(prompt("enter time in 24 hour clock"));
if(time >= 00 && time <12){
    alert("good morning");
}
else if(time >= 12 && time <17){
    alert("good afternoon");
}
else if(time >= 17 && time <21){
    alert("good evening");
}
else if(time >= 21 && time <24){
    alert("good night");
}



