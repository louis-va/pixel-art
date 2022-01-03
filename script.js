'use strict';

let currentColor = '#000';
let currentSize = 10;
let newSize = 10;

function createGrid(size) {
    let canvas = document.querySelector('#canvas');
    let square;

    for(let i=1; i<=size; i++){
        for(let j=1; j<=size; j++){
            square = document.createElement('div');
            square.classList.toggle('square');
            square.style.width = 100/size + '%';
            square.style.height = 100/size + '%';

            square.addEventListener('mousedown', (e) => {
                paint(e.target, currentColor);
            });

            square.addEventListener('mouseover', (e) => {
                e.target.classList.toggle('mouseover');
                if(e.buttons == 1 || e.buttons == 3){
                    paint(e.target, currentColor);
                }
            });

            square.addEventListener('mouseout', (e) => {
                e.target.classList.toggle('mouseover');
            });

            canvas.appendChild(square);
        }
    }
}

function paint(square, color) {
    square.style.backgroundColor = color;
}

function eraseGrid() {
    const canvas = document.getElementById("canvas")
    while (canvas.firstChild) {
        canvas.firstChild.remove();
    }
}

function clear() {
    eraseGrid();
    createGrid(currentSize);
}

function resize() {
    if(currentSize != newSize) {
        eraseGrid();
        createGrid(newSize);
        currentSize = newSize;
    }
}

function changeSize() {
    newSize = document.getElementById('resizeSlider').value;
    document.getElementById('size').textContent = newSize + "x" + newSize;
}

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clear);

const resizeButton = document.getElementById('resize');
resizeButton.addEventListener('click', resize);

const resizeSlider = document.getElementById('resizeSlider');
resizeSlider.addEventListener('input', changeSize);

createGrid(currentSize);