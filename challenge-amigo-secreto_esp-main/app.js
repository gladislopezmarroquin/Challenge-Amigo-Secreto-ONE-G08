// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let lista = document.getElementById('listaAmigos');
let resulatado = document.getElementById('resultado');

let regex = /\d/;

function agregarAmigo(){
    let numero_amigos =amigos.length;
    console.log(numero_amigos);

    let contenido =document.getElementById('amigo').value;


    if(contenido ==='' || contenido == null || regex.test(contenido))
    {
        alert("ingrese un nombre valido");
    }
    else{
        amigos.push(contenido);
        let li = document.createElement("li");
        li.textContent = contenido;
        lista.appendChild(li);
    }
    
    console.log(amigos);
    console.log(generaAleatorio());
}

function generaAleatorio(){
    if(amigos.length > 0){
        return Math.floor(Math.random() * amigos.length) + 1;  
    }
    return 0;    
    
}

function sortearAmigo(){
    if(amigos.length == 0){
        alert("Ingrese los nombres de sus amigos");
    }else{
        let indiceAmigo = generaAleatorio(); 

    } 
    
}

function vaciarArregloUL(){
    amigos = [];
    lista.innerHTML = "";
}