function createGrid(size) {
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
            line.appendChild(grid);
            grid.addEventListener("mousemove", () => {
                grid.style.backgroundColor = "black";
            });
        }
        container.appendChild(line);
    }
};

const sizeBtn = document.querySelector("sizeBtn");
sizeBtn.addEventListener("click", () => {
    const size = prompt("Size", 16);
    createGrid(size);
});
createGrid(16);

