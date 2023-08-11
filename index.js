const container = document.querySelector(".container");
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

function createGrid(size) {
    container.style.setTemplateRows =`repeat(${size}),1fr`;
    container.style.setTemplateColumns =`repeat(${size}),1fr`;
    
    for (let c = 0; c < (size * size); c++) {
        
        let cell = document.createElement("div");
        cell.style.backgroundColor = "black"
        container.appendChild(cell);
        
        cell.addEventListener("mouseover", e => {
            cell.style.backgroundColor = "white";
        })
        function clearGrid(){
                clear.addEventListener('click', e => {square.style.backgroundColor = "black"
            })
        }

        clearGrid()
    };
};

createGrid(16);
