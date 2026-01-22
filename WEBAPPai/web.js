// Select elements
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");
const toggleBtn = document.querySelector(".toggle-btn");
const body = document.body;

let currentInput = "";

// Button click handling
buttons.forEach((button) => {
  button.addEventListener("click", () => handleInput(button.textContent));
});

// Input handler function
function handleInput(value) {
  if (value === "C") {
    currentInput = "";
    display.value = "";
  } else if (value === "⌫") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if (value === "=") {
    calculate();
  } else {
    currentInput += value;
    display.value = currentInput;
  }
}

// Calculation logic
function calculate() {
  try {
    const sanitizedInput = currentInput
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/%/g, "/100*");

    const result = eval(sanitizedInput);
    display.value = result;
    currentInput = result.toString();
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
}

// Keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || "+-*/.%".includes(key)) {
    currentInput += key;
    display.value = currentInput;
  } else if (key === "Enter" || key === "=") {
    calculate();
  } else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if (key === "Escape") {
    currentInput = "";
    display.value = "";
  }
});

// Dark mode toggle
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggleBtn.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
