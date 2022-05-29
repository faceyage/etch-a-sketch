let size = 16;
let penColor = "black";
let bgColor = "red";
let currentMode = "colorMode";

function createGrids(size) {
    const container = document.querySelector("#grids");
    container.innerHTML = "";
    for (let i = 0; i < size; i++) 
    {
        const line = document.createElement("div");
        line.classList.add("line");
        for (let j = 0; j < size; j++) 
        {
            const grid = document.createElement("div");
            grid.classList.add("grid");
            grid.style.backgroundColor = bgColor;
            line.appendChild(grid);
            grid.addEventListener("mouseover", (e) => changeGridColor(e));
        }
        container.appendChild(line);
    }
};

function changeGridColor(e) {
    if (currentMode === "colorMode") {
        e.target.style.backgroundColor = penColor;
    }
    else if(currentMode === "eraserMode") {
        e.target.style.backgroundColor = bgColor;
    }
    else if(currentMode === "rainbowMode") {
        e.target.style.backgroundColor = createRandomColor();
        console.log("Not implemented yet");
    }
}

//returns a random color with rgb array with 3 numbers
function createRandomColor() {
    const RGB = [255,255,255];
    for (let i = 0; i < 3; i++) {
        RGB[i] = Math.floor(Math.random() * 256);
    }
    return `rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`;
};
// function clearGrids() {
//     const container = document.querySelector("#grids");
//     container.innerHTML = "";
// }

function addButtonListeners() {
    //sizeBtn functionality
    const sizeBtn = document.querySelector("#sizeBtn");
    sizeBtn.addEventListener("click", () => {
        size = prompt("Size", 16);
        createGrids(size);
    });

    //clearBtn functionality
    const clearBtn = document.querySelector("#clearBtn");
    clearBtn.addEventListener("click", () => createGrids(size));

    //colorBtn functionality
    const colorBtn = document.querySelector("#colorBtn");
    colorBtn.addEventListener("click", () => {
        currentMode = "colorMode";
    });
    //RainbowMode functionality
    const rainbowBtn = document.querySelector("#rainbowBtn");
    rainbowBtn.addEventListener("click", () => {
        currentMode = "rainbowMode";
    });
    //eraserBtn functionality
    const eraserBtn = document.querySelector("#eraserBtn");
    eraserBtn.addEventListener("click", () => {
        currentMode = "eraserMode"; 
    });

    //Detect when Pen Color changed in color palette
    const penColorPalette = document.querySelector("#penColor");
    penColorPalette.addEventListener("change", (e) => {
        penColor = e.target.value;
        console.log(penColor)
    });

}

createGrids(size);
addButtonListeners();