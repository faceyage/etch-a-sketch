function createGrid(size) {
    const container = document.querySelector("#grids");
    for (let i = 0; i < size; i++) 
    {
        const line = document.createElement("div");
        line.classList.add("line");
        for (let j = 0; j < size; j++) 
        {
            const grid = document.createElement("div");
            grid.classList.add("grid");
            line.appendChild(grid);
            grid.addEventListener("mouseenter", () => {
                grid.style.backgroundColor = "black";
            });
        }
        container.appendChild(line);
    }
}

createGrid(64);