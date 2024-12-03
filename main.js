document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.change-color-btn');
    

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const colorBox = button.parentElement;
            const newColor = getRandomColor();
            colorBox.style.backgroundColor = newColor;
            colorBox.querySelector('.color-code').textContent = newColor;
        });
    });

    const footerButton = document.querySelector('.footer-button');
    if(footerButton){
      footerButton.addEventListener('click', () => {
        const colorBoxes = document.querySelectorAll('.color-box');
        colorBoxes.forEach(colorBox => {
          const newColor = getRandomColor();
          colorBox.style.backgroundColor = newColor;
          colorBox.querySelector('.color-code').textContent = newColor;
        });
      });
    } else {
      console.log("Footer button not found.");
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});


//This script will:

//1. Wait for the DOM to be fully loaded.
//2. Select all buttons with the class `change-color-btn`.
//3. Add a click event listener to each button.
//4. When a button is clicked, it will change the background color of the parent element (the color box) to a random color and update the text inside the color box to display the new color code.

//Make sure to save this JavaScript code in a file named `main.js` and place it in the root directory of your Vite project.