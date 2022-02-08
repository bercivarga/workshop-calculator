// Calculator project

//HTML Elements
let display = document.querySelector('.display');

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');

const add = document.querySelector('.add');
const substract = document.querySelector('.substract');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');

const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

//Variables
let total = 0;
let calcTotal = null;
let operator = null

//Functions
function updateTotal(intVal){
    if (total == "0") {
        total = intVal
    } else {
        total = total + intVal
    }
    display.innerHTML = total
}

function calculation(type){
    if (type==="÷"){
        operator = "/"
    } else if (type==="×"){
        operator = "*"
    } else {
        operator = type
    }
    if (calcTotal === null){
        calcTotal = total
        total = 0
    } else {
        end()
        calcTotal = total
        total = 0
    }
}

function clearAll(){
    total = 0
    calcTotal = null
    operator = null
    display.innerHTML = total
}

function end(){
    total = eval(calcTotal+operator+total)  
    display.innerHTML=total  
    calcTotal = null
}

//Calculationbuttons
add.addEventListener("click", function pressed (inputParam){
    inputParam = this.innerHTML
    calculation(inputParam)
})
substract.addEventListener("click", function pressed (inputParam){
    inputParam = this.innerHTML
    calculation(inputParam)
})
multiply.addEventListener("click", function pressed (inputParam){
    inputParam = this.innerHTML
    calculation(inputParam)
})
divide.addEventListener("click", function pressed (inputParam){
    inputParam = this.innerHTML
    calculation(inputParam)
})

equal.addEventListener("click", function pressed (inputParam){
    end()
})
clear.addEventListener("click", function pressed (inputParam){
    clearAll()
})


//NumberButtons
zero.addEventListener("click", function pressed (inputParam){
    inputParam = this.innerHTML
    updateTotal(inputParam)
})
one.addEventListener("click", function pressed (inputParam){
    inputParam = this.innerHTML
    updateTotal(inputParam)
})
two.addEventListener("click", function pressed (inputParam){
    inputParam = this.innerHTML
    updateTotal(inputParam)
})
three.addEventListener("click", function pressed (inputParam){
    inputParam = this.innerHTML
    updateTotal(inputParam)
})
four.addEventListener("click", function pressed (inputParam){
    inputParam = this.innerHTML
    updateTotal(inputParam)
})
five.addEventListener("click", function pressed (inputParam){
    inputParam = this.innerHTML
    updateTotal(inputParam)
})
six.addEventListener("click", function pressed (inputParam){
    inputParam = this.innerHTML
    updateTotal(inputParam)
})
seven.addEventListener("click", function pressed (inputParam){
    inputParam = this.innerHTML
    updateTotal(inputParam)
})
eight.addEventListener("click", function pressed (inputParam){
    inputParam = this.innerHTML
    updateTotal(inputParam)
})
nine.addEventListener("click", function pressed (inputParam){
    inputParam = this.innerHTML
    updateTotal(inputParam)
})