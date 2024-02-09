
function getRandomNumber() {
    return Math.floor(Math.random() * 50) ;
}

function generarTablero(tableroId,size){
    const tablero = document.getElementById(tableroId);
    for (let index = 0; index < size; index++) {
        const element = document.createElement("tr");
        for (let j = 0; j < size; j++) {
            const element2 = document.createElement("td") ;
            element2.textContent = getRandomNumber();
            element.appendChild(element2);
            
        }
        tablero.appendChild(element);
        
    }
}


generarTablero("Tab1",3);
generarTablero("Tab2",3);
generarTablero("Tab3",3);
generarTablero("Tab4",3);