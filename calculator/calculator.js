let left_operand = "";
let right_operand = "";
let operator = "";
// Number(int), int.toString

const display = document.getElementById('display');
const buttons = document.querySelectorAll("button");

function addClickEvents(){
    for (const button of buttons){
        button.addEventListener('click', function(){
            if (button.classList.contains('number')) {
                inputOperand(button.innerText);
                updateDisplay();
            } else if(button.classList.contains('operator')){
                inputOperator(button.innerText);
                updateDisplay();
            } else if(button.classList.contains('equals')){
                inputEquals();
                updateDisplay();
            } else if(button.classList.contains('clear')){
                clear();
                updateDisplay();
            } else if(button.classList.contains('decimal')){
                inputDecimal();
                updateDisplay();
            } else if(button.classList.contains('sign')){
                inputSign();
                updateDisplay()
            }
        });
    }
}
addClickEvents();

function inputSign(){
    if (currentOperandIsLeft()){
        if (left_operand.startsWith("-")){
            left_operand = left_operand.substring(1);
        } else {
            left_operand = "-" + left_operand
        }
    } else {
        if (right_operand.startsWith("-")){
            right_operand = right_operand.substring(1);
        } else {
            right_operand = "-" + right_operand
        }
    }
}

function clear(){
    left_operand = "";
    right_operand = "";
    operator = "";
}

function inputDecimal(){
    if (currentOperandIsLeft()){
        if (left_operand === ""){
            left_operand = "0.";
        } 
        if (!left_operand.includes(".")){
            left_operand += ".";
        }
    } else {
        if (right_operand === ""){
            right_operand = "0.";
        } 
        if (!right_operand.includes(".")){
            right_operand += ".";
        }
    }
}

function currentOperandIsLeft(){
    return !operator
}

function inputEquals(){
    if (left_operand && operator && right_operand){
        evaluate();
    }
}

function inputOperator(newOp){
    if (!operator){
        operator = newOp;
    } else if (operator && right_operand){
        evaluate();
        operator = newOp;
    }
}

function inputOperand(digit){
    if (!operator) {
        left_operand += digit;
    } else {
        right_operand += digit;
    }
}



function updateDisplay(){
    if (!left_operand && !operator && !right_operand) {
        display.innerText = "0";
    } else {
        display.innerText = left_operand + " " + operator + " " + right_operand;
    }
}




function evaluate(){
    let result = 0;
    let left_number = Number(left_operand);
    let right_number = Number(right_operand)
    switch (operator){
        case "+":
            result = left_number + right_number;
            break; 
        case "-":
            result = left_number - right_number;
            break; 
        case "/":
            result = left_number / right_number;
            break; 
        case "*":
            result = left_number * right_number
            break;
    }

    left_operand = roundedString(result);
    operator = '';
    right_operand = '';
}

function roundedString(number){
    let string = number.toFixed(3);
    return Number(string).toString(); // remove trailing zeroes
}
