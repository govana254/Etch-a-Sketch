const container = document.getElementById("container");
const clear = document.querySelector("button");

clear.addEventListener('click', ()=> {
    resetSize()
})

function resetSize(){
    let number = prompt ("What size would you like the grid to be? (1-100)");
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`
    createGrid(number)
}

function makeRows(rows, cols) {
    container.style.setProperty('--grid-row', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

makeRows(4, 4);

function squareNumber () {
    let squares = prompt ("Please enter the number of squares")
    squares = Number(squares)
}
