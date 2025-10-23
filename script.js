const btnNumbers = document.querySelector(".numbers");
const btnOperators = document.querySelector(".operators");
const btnEqual = document.querySelector(".equal");
const output = document.querySelector(".output");
output.textContent = "0";

let firstNum;
let secondNum;
let operatorChoice;
let changeNum = false;
getValues()

function getValues(){
    let arrNum1 = [];
    let arrNum2 = [];
    btnOperators.addEventListener("click", (e) =>{
        if (!firstNum){
            changeNum = false;
        } else {
            changeNum = true;
        }
        operatorChoice = e.target.id;
        output.textContent = operatorChoice;
    }); 
    btnNumbers.addEventListener("click", (e) =>{
        const elementId = e.target.id;
        if (!changeNum){
            arrNum1.push(elementId);
            firstNum = parseInt(arrNum1.join(""));
            output.textContent = firstNum;
        } else {
            arrNum2.push(elementId);
            secondNum = parseInt(arrNum2.join("")); 
            output.textContent = secondNum;
        };
    });
};
let answ;
add()
function populate(){

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
    });
};

function add(){
    return firstNum + secondNum;
};
function subtract(){
    return firstNum - secondNum;
};
function multiply(){
    return firstNum * secondNum;
};
function divide(){
    return firstNum / secondNum;
};
