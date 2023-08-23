// globals
let isMouseDown = false;
let gridSize = 16;

// create and append square to grid
function addSquare() {
    const grid = document.querySelector('.grid-container');

    const square = document.createElement('div');
    square.classList.add('grid-square');

    // Use mousedown event to start tracking mouse state
    square.addEventListener('mousedown', () => {
        square.classList.add('grid-square-red');
        isMouseDown = true;
    });

    // Use mouseup event to stop tracking mouse state
    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });
    
    square.addEventListener('mouseover', () => {
        if (isMouseDown) square.classList.add('grid-square-red');
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




