const display = document.getElementById("display");
const historyList = document.getElementById("history-list");

let currentInput = "";

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (button.id === "clear") {
      clearDisplay();
    } else if (button.id === "equal") {
      calculate();
    } else {
      currentInput += value;
      updateDisplay(currentInput);
    }
  });
});

document.addEventListener("keydown", (event) => {
  const allowedKeys = "0123456789.+-*/";
  if (allowedKeys.includes(event.key)) {
    currentInput += event.key;
    updateDisplay(currentInput);
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
  } else if (event.key === "Escape") {
    clearDisplay();
  }
});

function updateDisplay(text) {
  display.textContent = text;
}

function clearDisplay() {
  currentInput = "";
  updateDisplay("");
}

function calculate() {
  const match = currentInput.match(/(-?\d+(\.\d+)?)([+\-*/])(-?\d+(\.\d+)?)/);
  if (!match) {
    updateDisplay("Erro");
    return;
  }

  const num1 = parseFloat(match[1]);
  const operator = match[3];
  const num2 = parseFloat(match[4]);

  fetch("http://localhost:3001/calculate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ num1, num2, operator })
  })
    .then(response => response.json())
    .then(data => {
      updateDisplay(data.result);
      addToHistory(`${num1} ${operator} ${num2} = ${data.result}`);
      currentInput = data.result.toString();
    })
    .catch(err => {
      console.error(err);
      updateDisplay("Erro");
    });
}

function addToHistory(entry) {
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li);
}
