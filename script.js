// globals
let isMouseDown = false;
let gridSize = 16;
let color = 'red';
let isRandom = false;

// create and append square to grid
function addSquare() {
    const grid = document.querySelector('.grid-container');

    const square = document.createElement('div');
    square.classList.add('grid-square');

    // Use mousedown event to start tracking mouse state
    square.addEventListener('mousedown', () => {
        square.style.backgroundColor = color;
        isMouseDown = true;
    });

    // Use mouseup event to stop tracking mouse state
    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });
    
    square.addEventListener('mouseover', () => {
        if (color === 'random' && isMouseDown) {
            const red = Math.floor(Math.random() * 255);
            const green = Math.floor(Math.random() * 255);
            const blue = Math.floor(Math.random() * 255);
            square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        } else if (isMouseDown) {
            square.style.backgroundColor = color;
        }
    })

    grid.appendChild(square);
}

function clearGrid() {
    const grid = document.querySelector('.grid-container');
    while (grid.firstChild) {
        grid.firstChild.remove();
    } 
}

function drawGrid(side=16) {
    const grid = document.querySelector('.grid-container');
    grid.style.setProperty('--grid-side', side)
    for (let i = 0; i < (side * side); i++) {
        addSquare();
    }
}

drawGrid(16);

const changeButton = document.querySelector('.change-size');
changeButton.addEventListener('click', () => {
    let side = prompt('Enter side length (up to 100) for the grid: ');
    if (+side < 1) {
        alert('Please choose a number greater than 0');
    } else if (+side > 100) {
        alert('Max number is 100.')
    } else {
        clearGrid();
        drawGrid(side);
        gridSize = side;
    }
})

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    clearGrid();
    drawGrid(gridSize);
});

const randomButton = document.querySelector('.random');
randomButton.addEventListener('click', () => {
    if (isRandom) {
        color = 'red';
        randomButton.classList.remove('btn-on');
        isRandom = false;
    } else {
        color = 'random';
        randomButton.classList.add('btn-on');
        isRandom = true;
    }
})




