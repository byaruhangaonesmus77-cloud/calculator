// script.js

// Get display element
const display = document.querySelector('.display');

// Get all buttons
const buttons = document.querySelectorAll('button');

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.classList.contains('clear')) {
      // Clear display
      display.value = '';
    } else if (button.classList.contains('equal')) {
      try {
        // Evaluate expression
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else {
      // Append button value to display
      display.value += value;
    }
  });
});
