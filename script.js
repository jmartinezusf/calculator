const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.keys');
const display = document.querySelector('.display');

keys.addEventListener('click', (e)=>{
    if(!event.target.closest('button')) return
    const key = e.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent;
    const type = key.dataset.type;
    const { previousKeyType } = calculator.dataset;

    if(type === 'number'){
        if(displayValue == 0){
            display.textContent = keyValue;
        } else if (previousKeyType === 'operator') {
            display.textContent = keyValue;
        }else {
            display.textContent = displayValue + keyValue;
        }
    }

    if(type === 'operator'){
        const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
        operatorKeys.forEach(el => { el.dataset.state = '' });

        key.dataset.state = 'selected'

        calculator.dataset.firstNumber = displayValue
        calculator.dataset.operator = key.dataset.key
    }

    if(type === 'equal'){

        const firstNumber = calculator.dataset.firstNumber;
        const operator = calculator.dataset.operator;

        const secondNumber = displayValue;

        display.textContent = calculate(firstNumber, operator, secondNumber);
    }

    if(type === 'clear'){
        display.textContent = '0';
        delete calculator.dataset.firstNumber
        delete calculator.dataset.operator
    }

    calculator.dataset.previousKeyType = type;

});

function calculate (firstNumber, operator, secondNumber) {

    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    let result = '';

    if(operator === 'plus'){
        result = firstNumber + secondNumber;
    }
    if(operator === 'minus'){
        result = firstNumber - secondNumber;
    }
    if(operator === 'times'){
        result = firstNumber * secondNumber;
    }
    if(operator === 'divide'){
        result = firstNumber / secondNumber;
    }
    return result;
}