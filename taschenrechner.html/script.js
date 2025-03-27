const display = document.getElementById('display');

function appendValue(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function calculate() {
  try {
    // Verwende eval sicher, da es hier nur für mathematische Ausdrücke genutzt wird
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = 'Error';
  }
}