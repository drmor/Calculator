const btnNumbers = document.querySelector(".numbers");
const btnOperators = document.querySelector(".operators");
const btnEqual = document.querySelector(".equal");
const outputBar = document.querySelector(".output");


let firstNum = 0;
let answer = 0;
let secondNum = 0;
let operatorChoice;
let changeNum = false;
getValues()
operate()

function getValues(){
    btnOperators.addEventListener("click", (e) =>{
        if (!firstNum){
            changeNum = false;
        } else {
            changeNum = true;
        }
        operatorChoice = e.target.id;
    }); 
    btnNumbers.addEventListener("click", (e) =>{
        const elementId = e.target.id;
        if (!changeNum){
            firstNum += elementId
        } else {
            secondNum += elementId || 0
        };
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
        console.log("before", firstNum, secondNum);
        firstNum = answer;
        secondNum = null;
        console.log("after", firstNum, secondNum);
        outputBar.textContent = answer;
    });
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
