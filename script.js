const keys = document.querySelector('.keys');
const display = document.querySelector('.display');

keys.addEventListener('click', (e)=>{
    if(!event.target.closest('button')) return
    const key = e.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent;

    if(displayValue == 0){
        display.textContent = keyValue;
    } else {
        display.textContent = displayValue + keyValue;
    }

});