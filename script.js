let display = document.getElementById('display');

function elias(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function backspace() {
    display.value = display.value.slice(0, -1);
}