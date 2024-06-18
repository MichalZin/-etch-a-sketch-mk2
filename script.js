const canvas = document.querySelector(".canvas");
const inputZone = document.querySelector(".formInput");


inputZone.addEventListener("submit", (e) => {


    e.preventDefault();

    let numberCount = document.getElementById('inputNum').value;
    const canvasWidth = parseInt(getComputedStyle(canvas).width);
    const canvasHeight = parseInt(getComputedStyle(canvas).height);

    const repeatDiv = () => {
        canvas.innerHTML = '';
        for (let i=0; i<numberCount; i++) {
            const newDiv = document.createElement("div");
            newDiv.style.width = `${canvasWidth/numberCount}px`;
            newDiv.style.height = `${canvasHeight/numberCount}px`;
            newDiv.style.backgroundColor = 'red'
            newDiv.style.border = "2px solid black";
            canvas.appendChild(newDiv);
        }
            
    }
    repeatDiv()

    const repeatRow = () => {
        
    }
});