//MILESTONE 2
//Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.

// - Recupero l'elemento griglia e il bottone dal DOM
const grid = document.getElementById('grid');
const button = document.getElementById('button');


//- Impostazioni della griglia
const row = 10;
const cells = 10;
const totalCells = row * cells;


// -Ciclo for per creare 100 celle all'interno della griglia

for(i = 0; i < totalCells; i++){
    const cell = document.createElement('div');

    cell.className = 'cell';

    grid.appendChild(cell);
}

// - Aggiungo l'evento al click del bottone

button.addEventListener('click', function(){

    grid.classList.remove('none');
    grid.classList.add('active');
    console.log(grid)
});

