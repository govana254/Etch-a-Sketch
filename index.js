const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-row', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell)
    }
}

makeRows(16, 16)