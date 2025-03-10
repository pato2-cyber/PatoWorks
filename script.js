function updateDateTime() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    const locationElement = document.getElementById('location');

    const now = new Date();
    
    // Formatear la fecha
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.innerText = now.toLocaleDateString('es-ES', options);

    // Formatear la hora
    timeElement.innerText = now.toLocaleTimeString('es-ES');

    // Obtener ubicación (ejemplo fijo)
    locationElement.innerText = 'Ubicación: Tu Ciudad, País'; // Puedes cambiar esto
}

// Actualizar cada segundo
setInterval(updateDateTime, 1000);

// Inicializar la fecha y hora al cargar la página
updateDateTime();
