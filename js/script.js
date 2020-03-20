console.log('Hello, front end');

let convertButton = document.getElementById('convert');
let clearButton = document.getElementById('clear');
let display = document.getElementById('display1');
let displaytemp = document.getElementById('giveMeTemp2');



let convertEvents = () => {
    let currentTemp = displaytemp.value;
    let celTrue = document.getElementsByName('temp');
    console.log(celTrue);
    console.log("0 index:", celTrue[0].checked);
    // console.log("1 index:", celTrue[1].checked);
    if (celTrue[1].checked) {
        display.textContent = (currentTemp - 32) / 2;
    } else if (celTrue[0].checked) {
        display.textContent = Math.floor((currentTemp - 32) * (5/9) - 273);
    } else {
        display.textContent = currentTemp;
    }
}

let clearEvents = () => {
        let cleardisplay = displaytemp.value;
        display.textContent = '';
}

convertButton.addEventListener('click', convertEvents)
clearButton.addEventListener('click', clearEvents)