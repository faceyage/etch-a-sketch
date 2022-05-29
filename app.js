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
            grid.addEventListener("mouseover", () => {
                if (currentMode === "colorMode") {
                    grid.style.backgroundColor = penColor;
                }
                else if(currentMode === "eraserMode") {
                    grid.style.backgroundColor = bgColor;
                }
                else if(currentMode === "rainbowMode") {
                    grid.style.backgroundColor = createRandomColor();
                    console.log("Not implemented yet");
                }
            });
        }
        container.appendChild(line);
    }
};

//returns a random color with rgb string like "rgb(0-255, 0-255, )"
function createRandomColor() {
    const RGB = [255,255,255];
    for (let i = 0; i < 3; i++) {
        RGB[i] = Math.floor(Math.random() * 256);
    }
    return `rgb(${RGB[0]},${RGB[1]},${RGB[2]})`;
};
// function clearGrids() {
//     const container = document.querySelector("#grids");
//     container.innerHTML = "";
// }

function addButtonListeners() {
    //sizeBtn funtionality
    const sizeBtn = document.querySelector("#sizeBtn");
    sizeBtn.addEventListener("click", () => {
        size = prompt("Size", 16);
        createGrids(size);
    });

    //clearBtn functionallity
    const clearBtn = document.querySelector("#clearBtn");
    clearBtn.addEventListener("click", () => createGrids(size));

    //colorBtn functionallity
    const colorBtn = document.querySelector("#colorBtn");
    colorBtn.addEventListener("click", () => {
        currentMode = "colorMode";
    });
    //RainbowMode functionallity
    const rainbowBtn = document.querySelector("#rainbowBtn");
    rainbowBtn.addEventListener("click", () => {
        currentMode = "rainbowMode";
    });
    //eraserBtn functionallity
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