const gridContainer = document.querySelector('.grid-container');

function grid(sizeInput) {
    let gridSize = Math.pow(sizeInput,2);
    let gridPixelSize = 640 / sizeInput;
    let squareDimension = `height: ${gridPixelSize}px; width: ${gridPixelSize}px;`;

    removePreviousGrid();

    for (i = 0; i < gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('individual-grid');
        div.setAttribute('style', squareDimension);
        gridContainer.appendChild(div);
    }
    const divs = document.querySelectorAll('.individual-grid');

    for (i = 0; i < divs.length; i++) {
        divs[i].addEventListener('mouseenter', function() {
            this.style.cssText = `background-color: ${randomColor()}; ${squareDimension}`;
        }, {once: true})

        divs[i].addEventListener('mouseenter', function() {
            const getColorStyle = window.getComputedStyle(this, null);
            const rgbColor = getColorStyle.getPropertyValue('background-Color');
            
            let splitRgb = rgbColor.split(',');

            const rValue = Number(splitRgb[0].replace('rgb(', ''));
            const gValue = Number(splitRgb[1].replace(' ', ''));
            const bSplit = splitRgb[2].replace(' ', '');
            const bValue = Number(bSplit.replace(')', ''));

            let rDecrement = rValue / 10;
            let r = rValue - rDecrement;

            let gDecrement = gValue / 10;
            let g = gValue - gDecrement;

            let bDecrement = bValue / 10;
            let b = bValue - bDecrement;

            this.style.cssText = `background-color: rgb(${r}, ${g}, ${b}); ${squareDimension}`;
        })
    }
}
grid(16);

function removePreviousGrid() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function button() {
    let sizeInput = Number(prompt('What size grid do you want?\nMaximum 100 x 100\nMinimum 1 x 1'));

    if (!Number.isInteger(sizeInput)) alert('Please enter a whole number');

    if (sizeInput <= 0 || sizeInput > 100) alert('Please enter a number from 1 to 100');

    if (sizeInput >= 1 && sizeInput <= 100) {
        grid(sizeInput);
        }
}

const btn = document.querySelector('button');

btn.addEventListener('click', button);

function randomColor() {
    let color = ['rgb(255,204,204)', 'rgb(255,51,51)', 'rgb(102,0,0)', 'rgb(255,229,204)', 'rgb(255,178,102)', 
        'rgb(255,128,0)', 'rgb(255,255,204)', 'rgb(255,255,0)', 'rgb(204,204,0)', 'rgb(153,153,0)', 
        'rgb(229,255,204)', 'rgb(153,255,51)', 'rgb(102,204,0)', 'rgb(51,102,0)', 'rgb(204,255,204)', 
        'rgb(153,255,153)', 'rgb(51,255,51)', 'rgb(0,102,0)', 'rgb(204,255,255)', 'rgb(102,255,255)', 
        'rgb(0,255,255)', 'rgb(0,204,204)', 'rgb(0,153,153)', 'rgb(204,229,255)', 'rgb(102,178,255)', 
        'rgb(0,128,255)', 'rgb(0,76,153)', 'rgb(204,204,255)', 'rgb(102,102,255)', 'rgb(0,0,255)', 
        'rgb(0,0,153)', 'rgb(229,204,255)', 'rgb(178,102,255)', 'rgb(127,0,255)', 'rgb(76,0,153)', 
        'rgb(255,204,255)', 'rgb(255,153,255)', 'rgb(255,0,255)', 'rgb(153,0,153)', 'rgb(255,153,204)', 
        'rgb(255,51,153)', 'rgb(204,0,102)', 'rgb(224,224,224)', 'rgb(160,160,160)', 
        'rgb(96,96,96)', 'rgb(64,64,64)'];

    let colorGenerator = color[Math.floor(Math.random() * color.length)];

    return colorGenerator;
}