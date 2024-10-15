// Obtener elementos
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close-modal")[0];
var video = document.getElementById("myVideo");

// Abrir el modal cuando se haga clic en el botón "Ver ahora"
btn.onclick = function() {
    modal.style.display = "flex"; // Mostrar el modal centrado
    video.play(); // Reproducir el video automáticamente
}

// Cerrar el modal cuando se haga clic en la X
span.onclick = function() {
    modal.style.display = "none"; // Ocultar el modal
    video.pause(); // Pausar el video al cerrar
}

// Cerrar el modal si se hace clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        video.pause();
    }
}
