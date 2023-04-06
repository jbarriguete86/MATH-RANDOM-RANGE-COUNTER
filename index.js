let mathRandom1 = 0;
let mathRandom2 = 0.99;

let resultText =  document.getElementById("result-box-floor");
let resultText2 = document.getElementById("result-box-ceil");

function addInfo(){
    let info = prompt("Enter the number")
    let int1 = info * mathRandom1;
    let int2 = info * mathRandom2;
    let option1 = Math.floor(int1);
    let option2 = Math.floor(int2);
    let option3 = Math.ceil(int1);
    let option4 = Math.ceil(int2); 
    resultText.textContent = "The range when using the Math.floor formula for that number will be: " + option1 + ", " + option2 + "."
    resultText2.textContent = "The range when using the Math.ceil formula for that number will be: " + option3 + ", " + option4 + "."
}

function clearInfo(){
    resultText.textContent= "You have not enter any number yet."
    resultText2.textContent= "You have not enter any number yet."
}