
let operand = "0";
var firstNum = 0;
var SecondNum = 0;
console.log("Welcome to the Calculator App.")

function getOperand() 
{
let operand = window.prompt("Please enter (+) to add, (-) so subtract, (x) to multiply or (/) to divide ");
}

alert(" You chose " + operand);


// Get first Number 
function getNumber1(this: any) {
    let Number1 = window.prompt(" Please enter the first number: ");    
    return this.Number1;
}

// Get first Number 
function getNumber2(this: any) {
    let Number1 = window.prompt(" Please enter the second number: ");    
    return this.Number2;
}

// calculate answer
function setAnswer(this: any, Number1, Number2) {
    switch (operand){
        case "+": 
            return (Number1 + Number2);
            break Answer;
        case "-": 
            return (Number1 - Number2);
            break;
        case "x": 
            return (Number1 * Number2);
            break;
        case "/": 
            return (Number1 - Number2);
            break;    
    }

    function displayAnswer() {
        console.log(Number1 + operand + Number2 = Answer)
    }

    let Answer = (Number1)



// again = console.log("Would you like to perform another calculation (y,n): ");






