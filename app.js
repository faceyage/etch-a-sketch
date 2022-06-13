let size = 16;
let penColor = "black";
let bgColor = "red";
let currentMode = "colorMode";

function createGrids(size) {
    const container = document.querySelector("#grids");
    const sizeValue = document.querySelector("#sizeValue");
    const sizeSlider = document.querySelector("#sizeSlider");
    sizeSlider.value = size;
    container.innerHTML = "";
    sizeValue.textContent = `${size} x ${size}`;
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

function addButtonListeners() {
    //clearBtn functionality
    const clearBtn = document.querySelector("#clearBtn");
    clearBtn.addEventListener("click", () => createGrids(size));

    //colorBtn functionality
    const colorBtn = document.querySelector("#colorBtn");
    colorBtn.addEventListener("click", (e) => {
        changeButtonColor(e);
        currentMode = "colorMode";
    });
    //RainbowMode functionality
    const rainbowBtn = document.querySelector("#rainbowBtn");
    rainbowBtn.addEventListener("click", (e) => {
        changeButtonColor(e);
        currentMode = "rainbowMode";
    });
    //eraserBtn functionality
    const eraserBtn = document.querySelector("#eraserBtn");
    eraserBtn.addEventListener("click", (e) => {
        changeButtonColor(e);
        currentMode = "eraserMode"; 
    });

    //Detect when Pen Color changed in color palette
    const penColorPalette = document.querySelector("#penColor");
    penColorPalette.addEventListener("change", (e) => {
        penColor = e.target.value;
        e.target.style = `border-color: ${penColor}`;
        console.log(penColor)
    });

    //Size slider
    const sizeSlider = document.querySelector("#sizeSlider");
    sizeSlider.addEventListener("change", (e) => {
        createGrids(e.target.value);
    });
}

function changeButtonColor(e) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
        btn.classList.remove("selected");
    });
    e.target.classList.add("selected");
}

createGrids(size);
addButtonListeners();