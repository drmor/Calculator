const btnNumbers = document.querySelector(".numbers");
const btnOperators = document.querySelector(".operators");
const btnEqual = document.querySelector(".equal");
const outputBar = document.querySelector(".output");
const btnClear = document.querySelector(".clear");
const btnPoint = document.querySelector(".point");

let firstNum = "";
let answer = 0;
let secondNum = "";
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
            secondNum = "";
            operatorChoice = null;
        }
        operatorChoice = e.target.id;
        populate()
    }); 
    btnNumbers.addEventListener("click", (e) =>{
        const elementId = e.target.id;
        if (!changeNum){
            firstNum += elementId;
        } else {
            secondNum += elementId;
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
        populate();
    });
    
};
function populate(){
    outputBar.textContent = answer; 
    if (firstNum){
        outputBar.textContent = firstNum.toString().substring(0, 5);
        if (operatorChoice){
            outputBar.textContent = firstNum + " " + operatorChoice;
            if (secondNum){
                outputBar.textContent = firstNum + " " + operatorChoice + " " + secondNum;
            };
        };
    };
};

function add(){
    answer = parseFloat(firstNum) + parseFloat(secondNum);
    return answer;
};
function subtract(){
    answer = parseFloat(firstNum) - parseFloat(secondNum);
    return answer;
};
function multiply(){
    answer = parseFloat(firstNum) * parseFloat(secondNum);
    return answer;
};
function divide(){
    if (firstNum && operatorChoice === "/" && secondNum === "0"){
        answer = "Error"
    } else {
        answer = parseFloat(firstNum) / parseFloat(secondNum);
    };
    return answer;
};

btnClear.addEventListener("click", () => {
    firstNum = 0;
    answer = 0;
    secondNum = 0;
    operatorChoice = null;
    changeNum = false;
});

btnPoint.addEventListener("click", () =>{

});