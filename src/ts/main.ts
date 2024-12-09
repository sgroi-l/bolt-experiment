import { generateRandomColor } from './colorGenerator.js';

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('colorButton');
    
    if (button) {
        button.addEventListener('click', () => {
            const newColor = generateRandomColor();
            document.body.style.backgroundColor = newColor;
        });
    }
});