const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
const mensaje = document.getElementById("mensaje"); // Agrega un elemento en tu HTML con id="mensaje" para mostrar mensajes

function mostrarMensaje(texto) {
    if (mensaje) {
        mensaje.innerText = texto;
        mensaje.style.display = "block";
        setTimeout(() => { mensaje.style.display = "none"; }, 2500);
    } else {
        alert(texto); // Por si no existe el elemento en el HTML
    }
}

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();
    if (!nombre) {
        mostrarMensaje("¡Ups! Debes escribir un nombre antes de agregarlo :)");
        return;
    }
    if (listaAmigos.includes(nombre)) {
        mostrarMensaje(`¡Psst! El nombre "${nombre}" ya está en la lista. ¿No será un clon? 😜`);
        return;
    }
    listaAmigos.push(nombre);
    ulListaAmigos.innerHTML += `<li>${nombre}</li>`;
    mostrarMensaje(`¡${nombre} a sido agregado con éxito! 🎉`);
    inputAmigo.value = "";
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        mostrarMensaje("¡Necesitas al menos 2 amigos para hacer el sorteo! Agrega a más gente 😅");
        ulResultado.innerHTML = "";
        return;
    }
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li> Y el Amigo Secreto es: ¡${amigoSecreto}! :D </li>`;
    mostrarMensaje(`¡Sorteo realizado! ¿Quién será el Amigo Secreto? 🤔`);
}