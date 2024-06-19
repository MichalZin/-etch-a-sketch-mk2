const canvas = document.querySelector(".canvas");
const inputZone = document.querySelector(".formInput");
const resetButton = document.getElementById("reset");
const numberCount = document.getElementById('inputNum');

inputZone.addEventListener("submit", (e) => {


    e.preventDefault();

    
    const canvasWidth = parseInt(getComputedStyle(canvas).width);
    const canvasHeight = parseInt(getComputedStyle(canvas).height);

    
    const repeatRow = () => {
        canvas.innerHTML = '';
        for (let i=0; i<numberCount.value; i++) {
            const newRow = document.createElement("div");
            repeatDiv(newRow);
            canvas.appendChild(newRow);
        }

    }
    const repeatDiv = (parent) => {
        
        for (let i=0; i<numberCount.value; i++) {
            const newDiv = document.createElement("div")
            newDiv.style.width = `${canvasWidth/numberCount.value}px`;
            newDiv.style.height = `${canvasHeight/numberCount.value}px`;
            newDiv.classList.add("singleTile")
            parent.appendChild(newDiv);
        }
    }

    
    repeatRow()
});

resetButton.addEventListener("click", () => {
    numberCount.value = '';
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild)
    }
    ;

})