//MILESTONE 2
//Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.

// FUNZIONI
const  createCell = content =>{
    const cell = document.createElement('div'); 
    cell.innerText = content;
    cell.className = 'cell';
    grid.appendChild(cell);

    return cell;
}

// - Recupero l'elemento griglia e il bottone dal DOM
const grid = document.getElementById('grid');
const button = document.getElementById('button');


//- Impostazioni della griglia
const row = 10;
const cells = 10;
const totalCells = row * cells;


// -Ciclo for per creare 100 celle all'interno della griglia

for (i = 1; i <= totalCells; i++) {
    let newCell = createCell(i);

    newCell.addEventListener('click',function(){
        console.log(newCell.innerText);
        this.classList.add('clicked');
        
        if (newCell.classList.contains('clicked')){
            
            return;
        }
    } )
}

// - Aggiungo l'evento al click del bottone

button.addEventListener('click', function () {

    grid.classList.remove('none');
    grid.classList.add('active');

});

