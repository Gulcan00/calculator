//Operations
function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

//Variables
let num1 = num2 = 0;
let operator = '';

function operate(operator, num1, num2) {
    switch (operator)
    {
        case '+': return add(num1, num2);
        case '-': return sub(num1, num2);
        case '*': return mul(num1, num2);
        case '/': return div(num1, num2);
        default: return null;
    }
}

function populateScreen(e) {
    const screen = document.querySelector(".calc-screen");
    screen.innerText = screen.innerText + ' ' + e.target.innerText;
}

const numbersAndOperators = document.querySelectorAll(".number, .operator");
numbersAndOperators.forEach((button) => {
    button.addEventListener('click', populateScreen);
})


