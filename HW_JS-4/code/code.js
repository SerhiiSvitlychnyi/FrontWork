function map(fn, array) {
    for (let i = 0; i < array.length; i++){        
        document.write(fn(array[i]).join("==") + "<br>");
    }    
};

function fn(arr){
    const new_arr = [];
    for (let i = 0; i < arr.length; i++){
        new_arr[i] = arr[i];
    }
    return new_arr;
};

map(fn, ["12345", "qwerty", "12qw34er"]);

const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const mul = (a, b) => {
    return a * b;
}

const div = (a, b) => {
    if (b === 0) {
        console.error("Error");
        return;
    }
    return a / b;
}

function calculate(num1, num2, callback, show) {
    show(callback(num1, num2));    
}

const op1 = parseFloat(prompt("add value 1")), op2 = parseFloat(prompt("add value 2")), sign = prompt("add sign");

function show(data) {
    document.getElementById('display').innerHTML = data;
}

switch (sign) {
    case "+": calculate(op1, op2, add, show);        
        break;
    case "-": calculate(op1, op2, sub, show);        
        break;
    case "*": calculate(op1, op2, mul, show);        
        break;
    case "/": calculate(op1, op2, div, show);        
        break;
}
