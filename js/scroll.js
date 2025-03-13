
//---------------
//   cursor
//---------------

    window.addEventListener('mousemove', function(e) {
      var arr = [1, 0.9, 0.8, 0.5, 0.2];

      arr.forEach(function(i) {
        var x = (1 - i) * 75;
        var star = document.createElement('div');

        star.className = 'star';
        star.style.top = e.pageY + Math.round(Math.random() * x - x / 2) + 'px';
        star.style.left = e.pageX + Math.round(Math.random() * x - x / 2) + 'px';

        document.body.appendChild(star);

        window.setTimeout(function() {
          document.body.removeChild(star);
        }, Math.round(Math.random() * i * 600));
      });
    }, false);
//---------------
//   carrousel
//---------------
const grande = document.querySelector(".grande");
const flechaIzq = document.querySelector(".flecha.izq");
const flechaDer = document.querySelector(".flecha.der");

let posicion = 0;

const moverCarrusel = (operacion) => {
    grande.style.transform = `translateX(${operacion}%)`;
}

flechaIzq.addEventListener("click", () => {
    if (posicion > 0) {
        posicion--;
    } else {
        posicion = 0; // Vuelve al final si está en la primera imagen
    }
    let operacion = posicion * -25;
    moverCarrusel(operacion);
});

flechaDer.addEventListener("click", () => {
    if (posicion < 3) {
        posicion++;
    } else {
        posicion = 0; // Vuelve al principio si está en la última imagen
    }
    let operacion = posicion * -25;
    moverCarrusel(operacion);
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
// });
