let clear = document.querySelector("button");
let container = document.querySelector(".container"); 

clear.addEventListener('click', ()=>{
    resetSize()
})


function resetSize(){
        
        let number = prompt("What size would you like the grid to be? (1-100)");
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        createGrid(number); 
}

function createGrid(size){
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size*size; i++) {
        
        let square = document.createElement("div");
        square.style.backgroundColor = "black";
        container.appendChild(square);

        //change background color of a square on hover
        square.addEventListener('mouseover', e=>{
            square.style.backgroundColor = "white";
        })


        //function to reset the grid
        function clearGrid(){
            clear.addEventListener('click', e=>{
                square.style.backgroundColor = "black"
            })
        }
        

        clearGrid();    
    }
}

createGrid(16);
