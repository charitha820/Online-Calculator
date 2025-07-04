const display = document.getElementById("display");
function appendToDisplay(input){
   display.value += input;
}
function clearDisplay(){
   display.value = "";
}
function square(){
  if (display.value !== '') {
    display.value = Math.pow(eval(display.value), 2);
  }
}

function calculate(){
   try{
   display.value = eval(display.value)
   }
   catch(error){
      display.value = "Error";

   }
}