const display=document.getElementById("display");


function appendDisplay(input){
   display.value += input;
}

function calculate(){
   display.value=eval(display.value);
}

function clearDisplay(){
   display.value="";
}