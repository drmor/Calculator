const btnNumbers = document.querySelector(".numbers");
const btnOperators = document.querySelector(".operators");
const btnEqual = document.querySelector(".equal");
const outputBar = document.querySelector(".output");
const btnAllClear = document.querySelector(".allClear"); 
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
        outputBar.textContent = firstNum.toString().substring(0, 10);
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

btnAllClear.addEventListener("click", () => {
    firstNum = "";
    answer = 0;
    secondNum = "";
    operatorChoice = null;
    changeNum = false;
});

btnClear.addEventListener("click",  () => {
    if (!firstNum){
        return
    } else if (firstNum && !secondNum){
        firstNum = firstNum.slice(0, -1);
        console.log('hi')
    } else if (firstNum && secondNum){
        secondNum = secondNum.slice(0, -1);
    };
});

btnPoint.addEventListener("click", () =>{

});