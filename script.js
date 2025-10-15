document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionar todos los elementos que pueden iniciar el giro (tarjetas y botones)
    const flipCards = document.querySelectorAll('.flip-card');
    const flipButtons = document.querySelectorAll('.small-button');

    // 2. Función principal para alternar el estado de giro
    function toggleFlip(targetElement) {
        // Obtenemos el contenedor que tiene el ID (el .flip-card)
        const flipCard = targetElement.closest('.flip-card');
        
        // Si no se encuentra el elemento (ej. si se llama desde el botón), salimos
        if (!flipCard) return;

        // Añade o quita la clase 'flipped' para activar el giro CSS
        flipCard.classList.toggle('flipped');
    }

    // A. Habilitar el giro al tocar o hacer clic en el área de la IMAGEN
    flipCards.forEach(card => {
        card.addEventListener('click', (event) => {
            // Prevenimos que el clic en el botón se procese dos veces si el botón está dentro
            // Esto es importante para el manejo de toques en móviles
            if (event.target.closest('.small-button')) {
                return; 
            }
            toggleFlip(card);
        });
    });

    // B. Habilitar el giro al tocar o hacer clic en el BOTÓN
    flipButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Obtenemos el ID del atributo data-target
            const targetId = button.getAttribute('data-target');
            // Buscamos la tarjeta asociada a ese ID
            const targetCard = document.getElementById(targetId);
            
            if (targetCard) {
                toggleFlip(targetCard);
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Código existente para el menú de hamburguesa
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');

    // Toggle para el menú de hamburguesa
    hamburgerMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });

    // Cerrar el menú cuando se hace clic en un enlace (en móvil)
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        });
    });

    // ------------------------------------------------------------------
    // ** CÓDIGO DEL BOTÓN FLOTANTE (NUEVO) **
    // ------------------------------------------------------------------
    
    const botonEnvases = document.getElementById('btn-envases-top');

    // Solo ejecuta la lógica si el botón existe en esta página (la de Envases)
    if (botonEnvases) {
        // Muestra el botón cuando el usuario se desplaza 300px hacia abajo
        const scrollLimite = 300; 

        function toggleBotonVisibilidad() {
            if (window.scrollY > scrollLimite) {
                // Muestra el botón añadiendo la clase 'show' de CSS
                botonEnvases.classList.add('show');
            } else {
                // Oculta el botón quitando la clase 'show'
                botonEnvases.classList.remove('show');
            }
        }

        // Ejecuta la función al hacer scroll y al cargar la página
        window.addEventListener('scroll', toggleBotonVisibilidad);
        window.addEventListener('load', toggleBotonVisibilidad);
    }
});