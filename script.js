const btnNumbers = document.querySelector(".numbers");
const btnOperators = document.querySelector(".operators");
const btnEqual = document.querySelector(".equal");
const outputBar = document.querySelector(".output");
const btnClear = document.querySelector(".clear");

let firstNum = 0;
let answer = 0;
let secondNum = 0;
let operatorChoice;
let changeNum = false;
getValues();
operate();
populate();

function getValues(){
    btnOperators.addEventListener("click", (e) =>{
        if (!firstNum){
            changeNum = false;
        } else {
            changeNum = true;
        }
        if (secondNum && operatorChoice){
            operate()
            console.log(answer)
        }
        operatorChoice = e.target.id;
        populate()
    }); 
    btnNumbers.addEventListener("click", (e) =>{
        const elementId = e.target.id;
        if (!changeNum){
            firstNum += elementId;
        } else {
            secondNum += elementId || 0;
        };
        populate()
    });
};

function operate(){
    btnEqual.addEventListener("click", () =>{
        if (operatorChoice === "+"){
            add();
        } else if (operatorChoice === "-"){
            subtract();
        } else if (operatorChoice === "*"){
            multiply();
        } else if (operatorChoice === "/"){
            divide();
        };
        firstNum = answer;
        secondNum = null;
        operatorChoice = null;
        populate()
    });
    
};
function populate(){
    outputBar.textContent = answer; 
    if (firstNum){
        outputBar.textContent = parseInt(firstNum);
        if (operatorChoice){
            outputBar.textContent = parseInt(firstNum) + " " + operatorChoice;
            if (secondNum){
                outputBar.textContent = parseInt(firstNum) + " " + operatorChoice + " " + parseInt(secondNum);
            };
        };
    };
};

function add(){
    answer = parseInt(firstNum) + parseInt(secondNum);
    return answer;
};
function subtract(){
    answer = parseInt(firstNum) - parseInt(secondNum);
    return answer;
};
function multiply(){
    answer = parseInt(firstNum) * parseInt(secondNum);
    return answer;
};
function divide(){
    answer = parseInt(firstNum) / parseInt(secondNum);
    return answer;
};

btnClear.addEventListener("click", () => {
    firstNum = 0;
    answer = 0;
    secondNum = 0;
    operatorChoice = null;
    changeNum = false;
});