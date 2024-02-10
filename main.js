
function getRandomNumber() {
    return Math.floor(Math.random() * 50)+1 ;
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

function sacarNumero(){
    let numero = getRandomNumber();
    window.alert("El numero que salio es: " + numero);

    let tableros = document.getElementsByClassName("tableros")

    for (let index = 0; index < 4; index++) {
        let cuadrito= tableros[index].getElementsByTagName("td");

        for (let j = 0; j < cuadrito.length; j++) {
            if (parseInt(cuadrito[j].innerText)===numero) {
                cuadrito[j].classList.add("encontrado")
                
            }
            
        }
        
    }

}
    


function registrarDatos(){
    
        let jugador = document.getElementById("Nombre1").value;
        document.getElementById("Jugador1").innerText = jugador
        let jugador2 = document.getElementById("Nombre2").value;
        document.getElementById("Jugador2").innerText = jugador2
        let jugador3 = document.getElementById("Nombre3").value;
        document.getElementById("Jugador3").innerText = jugador3
        let jugador4 = document.getElementById("Nombre4").value;
        document.getElementById("Jugador4").innerText = jugador4
        let num = document.getElementById("tam").value
        generarTablero("Tab1",num);
        generarTablero("Tab2",num);
        generarTablero("Tab3",num);
        generarTablero("Tab4",num);
    
    
}

function iniciarJuego(){
    document.getElementById("container").style.display="none";
    document.getElementById("juego").style.display="block";
}

function mostrarTablero1(){
    document.getElementById("tablero1").style.display="block";
    document.getElementById("tablero2").style.display="none";
    document.getElementById("tablero3").style.display="none";
    document.getElementById("tablero4").style.display="none";
}

function mostrarTablero2(){
    document.getElementById("tablero1").style.display="none";
    document.getElementById("tablero2").style.display="block";
    document.getElementById("tablero3").style.display="none";
    document.getElementById("tablero4").style.display="none";
}

function mostrarTablero3(){
    document.getElementById("tablero1").style.display="none";
    document.getElementById("tablero2").style.display="none";
    document.getElementById("tablero3").style.display="block";
    document.getElementById("tablero4").style.display="none";
}

function mostrarTablero4(){
    document.getElementById("tablero1").style.display="none";
    document.getElementById("tablero2").style.display="none";
    document.getElementById("tablero3").style.display="none";
    document.getElementById("tablero4").style.display="block";
}

function main(){
    registrarDatos();
    iniciarJuego();
    
}

function recargar(){
    location.reload();
}




