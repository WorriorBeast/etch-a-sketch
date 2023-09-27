const gridContainer = document.querySelector('.grid-container');

function defaultGrid() {
    for (i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('default-grid');
        gridContainer.appendChild(div);
    }
    const divs = document.querySelectorAll('.default-grid');

    divs.forEach(div => div.addEventListener('mousemove', () => {
    div.classList.add('div-hidden');
    }));
}
defaultGrid();

function customGrid(sizeInput) {
    let gridSize = Math.pow(sizeInput,2);
    let gridPixelSize = 640 / sizeInput;

    for (i = 0; i < gridSize; i++) {
        const div = document.createElement('div');
        div.classList.toggle('individual-grid');
        div.setAttribute('style', `height: ${gridPixelSize}px; width: ${gridPixelSize}px;`)
        gridContainer.appendChild(div);
    }
    const divs = document.querySelectorAll('.individual-grid');

    divs.forEach(div => div.addEventListener('mousemove', () => {
        div.classList.add('div-hidden');
    }));
}

function button() {
    let sizeInput = Number(prompt('What size grid do you want?\nMaximum 100 x 100\nMinimum 1 x 1'));

    if (!Number.isInteger(sizeInput)) alert('Please enter a whole number');

    if (sizeInput <= 0 || sizeInput > 100) alert('Please enter a number from 1 to 100');

    customGrid(sizeInput);
}

const btn = document.querySelector('button');

btn.addEventListener('click', button);