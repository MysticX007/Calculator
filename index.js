const result=document.getElementById("display");

function appendToDisplay(input){
result.value += input;
}

function clearDisplay(){
result.value="";
}

function calculate(){
    try{
result.value=eval(result.value);
    }
    catch(err){
        result.value="error";
    }
}