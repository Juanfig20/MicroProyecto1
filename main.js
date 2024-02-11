let turnos = 0;
let numeros = [];
let v1 = 0;
let v2 = 0;
let v3 = 0;
let v4 = 0;


//Numero aleatorio
function randomNumber() {
    return Math.floor(Math.random() * 50)+1 ;
}

//Genera una tabla dado un ID y el numero de tamaño
function generarTablero(tableroId,size){
    const tablero = document.getElementById(tableroId);
    for (let index = 0; index < size; index++) {
        const element = document.createElement("tr");
        for (let j = 0; j < size; j++) {
            const element2 = document.createElement("td") ;
            element2.textContent = randomNumber();
            element.appendChild(element2);
            
        }
        tablero.appendChild(element);
        
    }
}


// Compara un numero con los de la tabla y pinta los que son iguales
function sacarNumero(){
    //Se modifica el contador de turnos
    turnos++
    document.getElementById("turno").innerText = turnos.toString();
    //Se saca el numero
    let numero = randomNumber();
    window.alert("El numero que salio es: " + numero);
    terminarTurnos();
    // Se recorren las celdas de cada tablero buscando el numero
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
    
//Termina el juego cuando se sacaron 25 numeros
function terminarTurnos(){
    if (turnos === 25) {
        window.alert("Se acabo el juego")
        //Se guardan los jugadores y sus victorias en local storage
        guardarPuntos(document.getElementById("Jugador1").innerText,v1)
        guardarPuntos(document.getElementById("Jugador2").innerText,v2)
        guardarPuntos(document.getElementById("Jugador3").innerText,v3)
        guardarPuntos(document.getElementById("Jugador4").innerText,v4)
        location.reload();
    }
}

// Coloca los nombres de los jugadores y el tamano de sus respectivos tableros
function registrarDatos(){
        validarNombres();
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

//Muestra los tableros
function iniciarJuego(){
    document.getElementById("container").style.display="none";
    document.getElementById("juego").style.display="block";
}

//Muestra el tablero1
function mostrarTablero1(){
    document.getElementById("tablero1").style.display="block";
    document.getElementById("tablero2").style.display="none";
    document.getElementById("tablero3").style.display="none";
    document.getElementById("tablero4").style.display="none";
}

//Muestra el tablero2
function mostrarTablero2(){
    document.getElementById("tablero1").style.display="none";
    document.getElementById("tablero2").style.display="block";
    document.getElementById("tablero3").style.display="none";
    document.getElementById("tablero4").style.display="none";
}

//Muestra el tablero3
function mostrarTablero3(){
    document.getElementById("tablero1").style.display="none";
    document.getElementById("tablero2").style.display="none";
    document.getElementById("tablero3").style.display="block";
    document.getElementById("tablero4").style.display="none";
}

//Muestra el tablero4
function mostrarTablero4(){
    document.getElementById("tablero1").style.display="none";
    document.getElementById("tablero2").style.display="none";
    document.getElementById("tablero3").style.display="none";
    document.getElementById("tablero4").style.display="block";
}

// Funcion para que un boton hiciera dos cosas diferentes
function main(){
    registrarDatos();
    iniciarJuego();
    
}

//Recarga la pagina
function recargar(){
    location.reload();
}


//Verifica que todos los campos de nombre esten llenos antes de iniciar el juego
function validarNombres(){
    if (document.getElementById("Nombre1").value.length === 0) {
        window.alert("Rellene todos los campos para continuar")
        location.reload();     
    }else if (document.getElementById("Nombre2").value.length === 0) {
        window.alert("Rellene todos los campos para continuar")
        location.reload();
    }else if (document.getElementById("Nombre3").value.length === 0) {
        window.alert("Rellene todos los campos para continuar")
        location.reload();
    }else if (document.getElementById("Nombre4").value.length === 0) {
        window.alert("Rellene todos los campos para continuar")
        location.reload();
    }
}


//Guarda los parametros en local storage
function guardarPuntos(jugador, victoria) {
    
    if (typeof(Storage) !== "undefined") {
      
      let ganado = JSON.parse(localStorage.getItem("ganado")) || [];
    
      ganado.push({ nombre: jugador, victorias: victoria });
  
      localStorage.setItem("ganado", JSON.stringify(ganado));
    } else{
        console.log("LocalStorage no soportado en este navegador")
    }
  }

 