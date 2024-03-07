const container = document.querySelector('.container');

function getGrid() {
    let num = 16;

    for (let column = 1; column <= num; column++) {
        for (let row = 1; row <= num; row++) {
            const colors = document.createElement('div');
            colors.setAttribute('class', 'colors');
            container.appendChild(colors);

            function changeColor() {
                colors.setAttribute('class', 'color-changed');
            }
            colors.addEventListener('mouseover', changeColor);
        }
    }
}

getGrid();

