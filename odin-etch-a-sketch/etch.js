let container = document.getElementById("sketch-container");
let button = document.getElementById("size-button");

function create_grid(size){
    cell_count = size**2;
    for (let x=0; x<cell_count; x++){
        let cell = create_cell(size);
        container.appendChild(cell);
    }
}

function create_cell(n){
    let cell = document.createElement("div");
    cell.style.border = "1px solid black";
    cell.style.width = `${Math.floor(container.offsetWidth / n - 5)}px`;
    cell.style.aspectRatio = "1";
    cell.style.opacity = 0.1;
    cell.classList.add("cell");

    cell.addEventListener("mouseover", (e) => {
        cell.style.backgroundColor = "black"
        let opacity = parseFloat(window.getComputedStyle(cell).getPropertyValue("opacity"));
        opacity = Math.min(1.0, opacity+0.1);
        cell.style.opacity = opacity;
    });
    return cell;
}

function prompt_size(){
    let input = window.prompt("How big do you want your grid? ");
    let size = parseInt(input);
    if(isNaN(size)){
        window.alert("Not a valid number");
    } else if(size < 1 || size > 100){
        window.alert("Number out of range");
    } else {
        container.replaceChildren();
        create_grid(size);
    }
}

create_grid(10);
button.addEventListener("click", (e)=>{
    prompt_size()
});