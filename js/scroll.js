import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
//---------------
//   swiper
//---------------
var swiper = new Swiper(".mySwiper", {
    loop: true, // Hace que el carrusel sea infinito
    navigation: { // Agrega botones de siguiente y anterior
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: { // Agrega puntos de paginación
        el: ".swiper-pagination",
        clickable: true,
    },
});
//----------
//  scroll
//----------
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todas las secciones
    const sections = document.querySelectorAll('.section-scroll');
    
    // Configuración del Intersection Observer
    const options = {
        threshold: 0.6 // Cuando al menos 60% de la sección es visible
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Actualizar la URL sin recargar la página
                const sectionId = entry.target.id;
                history.replaceState(null, null, `#${sectionId}`);
            }
        });
    }, options);
    
    // Observar cada sección
    sections.forEach(section => {
        observer.observe(section);
    });
});

//document.addEventListener('DOMContentLoaded', function() {
    // Código existente del Intersection Observer sin cambios...
    
    // Modificar la función de rotación
//    window.addEventListener('scroll', function() {
//        var scrollPosition = window.scrollY;
//        var rotation = scrollPosition % 360;
//        document.getElementById('rotatingImage').style.transform = 'rotate(' + rotation + 'deg)';
//    });
//});
