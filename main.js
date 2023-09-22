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
    if (num2 === 0) {
        alert("Cannot divide by 0!!!!");
        return null;
    }
    return num1 / num2;
}

//Variables
let num1 = num2 = 0;
let operator = '';
let input;
const screen = document.querySelector(".calc-screen");
const point = document.getElementById('point');
const buttons = document.querySelectorAll("button");

function operate(operator, num1, num2) {
    switch (operator)
    {
        case '+': return add(num1, num2);
        case '-': return sub(num1, num2);
        case 'x': return mul(num1, num2);
        case '/': return div(num1, num2);
        default: return null;
    }
}

function populateScreen(e) {
    let content = screen.textContent;
    if (e.target.classList.contains('number') || e.target.id === 'point') {
        content += e.target.innerText;
        
    } else if (e.target.classList.contains('operator')) {
        content += ' ' + e.target.innerText + ' ';
        point.disabled = false;
    } 
    screen.textContent = content;
    input = content.split(" ");
}

const numbersAndOperators = document.querySelectorAll(".number, .operator");
numbersAndOperators.forEach((button) => {
    button.addEventListener('click', populateScreen);
})

//AC button 
const clear = document.querySelector(".calc-clear");
clear.addEventListener('click', (e) => {
    screen.innerHTML = null;
    input = null;
    point.disabled = false;
})

//Equals sign button
const submit = document.querySelector(".equals");
submit.addEventListener('click', (e) => {
    if (input) {
    const resultObj = input.reduce((obj, item) => {
        const num = Number(item);
        if(isNaN(num)) {
            obj.lastOperator = item;
        }
        else {
            const ans =  operate(obj.lastOperator, obj.result, num);
            obj.result = ans !== null ? ans : num;
        }

        return obj;
    }, {result: 0, lastOperator: ""});

    const result = Math.round(resultObj.result * 10) / 10;

    screen.textContent = result;
}
})


point.addEventListener('click', populateScreen);
point.addEventListener('click', () => point.disabled = true)


//Backspace
const backspace = document.getElementById('backspace');
backspace.addEventListener('click', () => {
    if (input && screen.textContent) {
        input.pop();
        screen.textContent = screen.textContent.slice(0, -1);
    }
})


//Keyboard support
window.addEventListener('keydown', (e) => {
    const btnsArr = Array.from(buttons);
    let btn = btnsArr.find(btn => btn.innerText === e.key.toLocaleLowerCase());
    if (e.key === 'Enter') {
        btn = btnsArr.find(btn => btn.classList.contains("equals"));
    } 

    if (e.key === '*') {
        btn = btnsArr.find(btn => btn.innerText === 'x');
    }
    if (btn) {
        btn.click();
    }
})
