let display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    if(display.value === "") return"";
    if(display.value === '=') return"";

    if(display.value.includes('//') || display.value.includes('**')){
        display.value = "Error";
        return;
    }
    display.value = eval(display.value);
}