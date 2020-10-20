class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.readyToReset = false;
        this.clear();
    }
    
    clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = ''; //undefined
    }

    delet() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(num) {
        if (num === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + num.toString();

    }
    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation = '';
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this. currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break
            case '-':
                computation = prev - current;
                break
            case '/':
                computation = prev / current;
                break
            case '*':
                computation = prev * current;
                break
            default:
                return;
        }
        this.readyToReset = true;
        this.currentOperand = computation;
        this.operation = ''; //undefined
        this.previousOperand = '';
    }

    updateDisplay() {
        this.currentOperandText.innerText = this.currentOperand;
        this.previousOperandText.innerText = `${this.previousOperand} ${this.operation}`;
    }
}

const numberButtons = document.querySelectorAll('.numbers');
const operationButtons = document.querySelectorAll('.operator');
const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const multiplyButton = document.getElementById('multiply-button');
const divideButton = document.getElementById('divide-button');
const clearButton = document.getElementById('clear-button');
const deleteButton = document.getElementById('delete-button');
const equalsButton = document.getElementById('equals-button');

const previousOperandText = document.getElementById('previous-operand');
const currentOperandText = document.getElementById('current-operand');


const calculator = new Calculator(previousOperandText, currentOperandText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(calculator.previousOperand === "" &&
            calculator.currentOperand !== "" &&
            calculator.readyToReset) {
                calculator.currentOperand = "";
                calculator.readyToReset = false;
        }
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

clearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
    calculator.delet();
    calculator.updateDisplay();
});

/* -------- TO HANDLE KEYBOARD INPUT -------- */

function keyPressEvent (e) {
    let keyCode = e.keyCode;
    //console.log(keyCode);
    let numCode = String.fromCharCode(e.keyCode)
    
    if ( keyCode >= 48 && keyCode <= 57) {
        calculator.appendNumber(numCode);
        calculator.updateDisplay();
    } else if (keyCode === 46) {
        calculator.appendNumber(numCode);
        calculator.updateDisplay();
    } else if (keyCode === 13) {
        calculator.compute();
        calculator.updateDisplay();
    } else if (keyCode === 43) {
        calculator.chooseOperation('+');
        calculator.updateDisplay();
    }  else if (keyCode === 45) {
        calculator.chooseOperation('-');
        calculator.updateDisplay();
    } else if (keyCode === 47) {
        calculator.chooseOperation('/');
        calculator.updateDisplay();
    } else if (keyCode === 42) {
        calculator.chooseOperation('*');
        calculator.updateDisplay();
    } else if (keyCode === 127) {
        calculator.delet();
        calculator.updateDisplay();
    }  
}

document.addEventListener('keypress', keyPressEvent);
document.addEventListener('keydown', (e) => {
    let key = e.key;
    if (key === 'Backspace') {
        calculator.clear();
        calculator.updateDisplay();
    }
});

const allBtns = document.querySelectorAll('button[data-numkey]');

/* -------- ADD VISUAL FEEDBACK WHEN TYPING -------- */

window.addEventListener('keydown', (e) => { handle(e) });
window.addEventListener('keyup', (e) => { handle(e) });

function handle(e) {
    const a = e.key;
    switch (a) {
        case '7':
            allBtns[0].classList.toggle('press');
            break
        case '8':
            allBtns[1].classList.toggle('press');
            break
        case '9':
            allBtns[2].classList.toggle('press');
            break
        case '4':
            allBtns[3].classList.toggle('press');
            break
        case '5':
            allBtns[4].classList.toggle('press');
            break
        case '6':
            allBtns[5].classList.toggle('press');
            break
        case '1':
            allBtns[6].classList.toggle('press');
            break
        case '2':
            allBtns[7].classList.toggle('press');
            break
        case '3':
            allBtns[8].classList.toggle('press');
            break
        case '0':
            allBtns[9].classList.toggle('press');
            break
        case '.':
            allBtns[10].classList.toggle('press');
            break
        case '+':
            allBtns[11].classList.toggle('press');
            break
        case '-':
            allBtns[12].classList.toggle('press');
            break
        case '*':
            allBtns[13].classList.toggle('press');
            break
        case '/':
            allBtns[14].classList.toggle('press');
            break
        case 'Backspace':
            allBtns[15].classList.toggle('press');
            break
        case 'Delete':
            allBtns[16].classList.toggle('press');
            break
        case 'Enter':
            allBtns[17].classList.toggle('press');
            break
        default:
            return;
    }
}

