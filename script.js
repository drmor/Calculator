let num1 = prompt("num1")
let num2 = prompt("num2")
let operator = prompt("operator (+, -, *, /)")

function operate(a, b, c){
    let answ;
    if (operator === "+"){
        answ = a + b;
    }  else if (operator === "-"){
        answ = a - b;
    }  else if (operator === "*"){
        answ = a * b;
    }  else if (operator === "/"){
        answ = a / b;
    }
    
    console.log(answ);
}

operate(parseInt(num1), parseInt(num2))