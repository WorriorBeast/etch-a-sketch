const gridContainer = document.querySelector('.grid-container');

for (i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.toggle('individual-grid');
    gridContainer.appendChild(div);
}

const divs = document.querySelectorAll('.individual-grid');

divs.forEach(div => div.addEventListener('mousemove', () => {
    div.classList.add('div-hidden');
}));