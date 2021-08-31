let inputField = document.getElementById('inputItem');

//заполнение
let numbers = document.getElementById('container');
numbers.addEventListener('click', (event) => {
    if(event.target.classList.contains('item')) {
        inputField.value += event.target.innerHTML
    }
})

//очистить всё
let cleanAll = document.getElementById('clean');
cleanAll.addEventListener('click', () => {
    inputField.value = "";
})

//удалить последний символ
let cleanLasTNumber = document.getElementById('cleanLastNumber');
cleanLasTNumber.addEventListener('click', () => {
    let str = inputField.value;
    inputField.value = str.substring(0, str.length-1)
})

//вычислить выражение
let equal = document.getElementById('equal');
equal.addEventListener('click', () => {
    let exp = inputField.value;
    if(exp) {
        inputField.value = eval(exp);
    }
}) 