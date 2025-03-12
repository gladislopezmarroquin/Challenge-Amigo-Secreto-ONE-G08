// Amigo Secreto
let amigos = [];  //Se hace un Array para almacenar la lista de amigos


function agregarAmigo() {
    let input = document.getElementById("amigo"); // Obtiene el dato del input - Capturar el valor del campo de entrada
    let nombre = input.value
                        .trim() // Eliminar espacios en blanco al inicio y final 
                        .replace(/\b\w/g, (amigo) => amigo.toUpperCase()); // Convierte la inicial mayuscula, ya que son nombres propios

    if (nombre !== "") {
        
        amigos.push(nombre); // Agregar al array, el push sube o agrega al array lo ingresado desde el imput - Actualizar el array de amigos

        actualizarListaDeAmigos(); // Actualizar la lista en el DOM
        input.value = ""; // Limpiar el input
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}
           

function actualizarListaDeAmigos() {
    let lista = document.getElementById("listaAmigos"); // Obtiene el dato del input - Capturar el valor del campo de entrada
   
    lista.innerHTML = ""; // Limpiar la lista
    
    for (let i = 0; i < amigos.length; i++) {               // se crea un bucle que recorre toda la lista de amigos
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        lista.appendChild(nuevoElemento);
    }
}


function sortearAmigo() {
    if (amigos.length >0){
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        let amigoSeleccionado = amigos[indiceAleatorio];
        let resultadoElemento = document.getElementById("resultado");
        resultadoElemento.textContent = `El amigo secreto es: ${amigoSeleccionado}`;
    } else {
        alert("No hay amigos en la lista.");
    }

}
    
    





