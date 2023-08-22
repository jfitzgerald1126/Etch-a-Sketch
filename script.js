// create and append square to grid
function addSquare() {
    const grid = document.querySelector('.grid-container');
    console.log(grid);

    const square = document.createElement('div');
    square.classList.add('grid-square');

    grid.appendChild(square);
}

// create add squares to div
for (let i = 0; i < 256; i++) {
    addSquare();
}
