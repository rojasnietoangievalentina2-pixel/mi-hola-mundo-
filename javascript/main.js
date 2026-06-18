// Ajustar fondo y contenido al iniciar la página
window.onload = function() {

    // Modificar el texto del h1
    let encabezado = document.getElementById("titulo");
    encabezado.textContent = "🌈 Saludos futuristas llenos de imaginación 🌈";

    // Crear una nueva línea con estilo diferente
    let mensajeExtra = document.createElement("p");
    mensajeExtra.textContent = "💡 Atrévete a pensar distinto y a crear sin límites";
    mensajeExtra.style.color = "darkblue";
    mensajeExtra.style.fontSize = "22px";
    mensajeExtra.style.fontStyle = "italic";

    // Insertar la nueva línea en el documento
    document.body.appendChild(mensajeExtra);
};
