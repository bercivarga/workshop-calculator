// Calculator project
display = document.querySelector('.display');
let result = ''
let completed = false

let number = [];
for (var i = 0; i <= 9; ++i) {
    number[i] = document.querySelector(".number" + i);
    number[i].addEventListener("click", function () { addDigit() });
}

remove = document.querySelector('.delete');
remove.addEventListener("click", function () { removeDigit() });
clear = document.querySelector('.clear');
clear.addEventListener("click", function () { clearDisplay() });
equal = document.querySelector('.equal');
equal.addEventListener("click", function () { Calc() });
add = document.querySelector('.add');
add.addEventListener("click", function () { addOperator("+") });
substract = document.querySelector('.substract');
substract.addEventListener("click", function () { addOperator("-") })
multiply = document.querySelector('.multiply');
multiply.addEventListener("click", function () { addOperator("*") })
divide = document.querySelector('.divide');
divide.addEventListener("click", function () { addOperator("/") })
preview = document.querySelector('.preview');

function clearDisplay() {
    display.innerHTML = 0;
    result = ''
    preview.innerHTML = '';
}

function addDigit() {
    if (completed) {
        clearDisplay()
        completed = false
    }
    result = result + this.event.target.innerHTML
    if (display.innerHTML == 0) {
        display.innerHTML = this.event.target.innerHTML

    } else {
        display.innerHTML = display.innerHTML + this.event.target.innerHTML
        preview.innerHTML = calcPreview()
    }
}

function removeDigit() {
    if (display.innerHTML.length == 1) {
        display.innerHTML = 0
    } else {
        display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1)
        result = result.substring(0, result.length - 1)
        preview.innerHTML = calcPreview()
    }
}

function addOperator(operator) {
    completed = false
    if (lastCharNumber(result)) {
        display.innerHTML = display.innerHTML + this.event.target.innerHTML
        result = result + operator
    }

    if (display.innerHTML.length==1 && operator == "-" ){
        display.innerHTML="-";
        result="-"
    } 
}

function lastCharNumber(string) {
    if (!isNaN(parseInt(string.substring(string.length - 1)))) {
        return true
    } else {
        return false
    }
}

function calcPreview() {
    show = false
    for (var i = 0; i <= display.innerHTML.length; ++i) {
        test = !lastCharNumber(display.innerHTML.substring(0, display.innerHTML.length - i + 1))
        if (test) {
            show = true
            break; //operator found
        }
    }
    if (show) {
        if (lastCharNumber(result)) {
            return eval(result)
        } else { return '' }
    } else { return '' }
}

function Calc() {
    if (lastCharNumber(result)) {
        display.innerHTML = calcPreview();
        result = display.innerHTML
        preview.innerHTML = '';
        completed = true
    }
}