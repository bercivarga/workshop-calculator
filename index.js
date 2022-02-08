// Calculator project

//Objects ///////////////////////////////////////////////////////////////
const display = document.querySelector('.display');
const numberButtons = Array.from(document.getElementsByClassName('numberButton'));
const operationButtons = Array.from(document.getElementsByClassName('operationButton'));
const clearButton = document.querySelector('.clear')
const calculateButton = document.querySelector('.equal')
const calculator = {
    previousNumber: '',
    currentNumber: 0,
    total: '',
    operation: ''
}


//Functions ///////////////////////////////////////////////////////////////
function updateDisplay (value) {
    display.innerText = value
} 

function clearCalculator() {
    calculator.previousNumber = ''
    calculator.currentNumber = 0
    calculator.total = ''
    calculator.operation = ''
    updateDisplay(calculator.currentNumber = 0)
}

function calculateCalculator() {
    
    calculator.total = eval(
        calculator.previousNumber 
        + calculator.operation 
        + calculator.currentNumber)
    calculator.previousNumber = calculator.total
    calculator.currentNumber = ''
    updateDisplay (calculator.total)
}

function updateNumber(button) {
    calculator.currentNumber = eval(calculator.currentNumber + button.innerText)
    updateDisplay(calculator.currentNumber)
}

function updateOperation(button) {
    calculator.operation = button.innerText
    if (calculator.previousNumber === '') {
        calculator.previousNumber = calculator.currentNumber
        calculator.currentNumber = ''
    }
    else if (calculator.previousNumber != '' && calculator.currentNumber != '') {
        calculateCalculator()

        updateDisplay(calculator.total)
    }

}


// Event Listeners ///////////////////////////////////////////////////////////////

//Number buttons
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener(
        'click',
        function() {
            updateNumber(numberButtons[i])
        }
    )
}

//Operation buttons 
for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener(
        'click',
        function() {
            updateOperation(operationButtons[i])
        }
    )
}

//Clear button
clearButton.addEventListener(
    'click',
    function() {clearCalculator()}
)

//Calculation button
calculateButton.addEventListener(
    'click',
    function() {calculateCalculator()}
)

