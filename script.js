document.addEventListener("DOMContentLoaded", function() {
    // Cambiar el fondo del contenedor
    var imagenesFondo = ['./assets/fondo-1.jpg', './assets/fondo-2.jpg', './assets/fondo-3.jpg'];
    var actualFondo = 0;
    var contenedorFondo = document.querySelector('.contenedor-1');

    setInterval(function() {
        actualFondo = (actualFondo + 1) % imagenesFondo.length;
        contenedorFondo.style.backgroundImage = 'url(' + imagenesFondo[actualFondo] + ')';
    }, 5000); // Cambia la imagen cada 5000 milisegundos (5 segundos)

    // Cambiar las imágenes de la galería
    let imagenesGaleria = document.querySelectorAll('.galeria img');
    let indiceActualGaleria = 0;

    function cambiarImagenGaleria() {
        imagenesGaleria[indiceActualGaleria].classList.remove('active');
        indiceActualGaleria = (indiceActualGaleria + 1) % imagenesGaleria.length;
        imagenesGaleria[indiceActualGaleria].classList.add('active');
    }

    setInterval(cambiarImagenGaleria, 3000); // Cambia cada 3000 milisegundos (3 segundos)

    // Manejar preguntas frecuentes
    const preguntas = document.querySelectorAll('.pregunta-titulo');

    preguntas.forEach(pregunta => {
        pregunta.addEventListener('click', function() {
            const contenedorPregunta = this.parentNode;
            contenedorPregunta.classList.toggle('pregunta-activa');
            const respuesta = contenedorPregunta.querySelector('.respuesta');
            respuesta.style.display = respuesta.style.display === 'block' ? 'none' : 'block';
            const flecha = this.querySelector('.flecha');
            flecha.innerHTML = respuesta.style.display === 'block' ? '&#9652;' : '&#9662;';
        });
    });
});

// Calculadora
function concatenar(valor) {
    document.getElementById("display").value += valor;
}

function operar(operador) {
    document.getElementById("display").value += operador;
}

function limpiar() {
    document.getElementById("display").value = "";
}

function calcular() {
    try {
        var resultado = eval(document.getElementById("display").value);
        document.getElementById("display").value = resultado;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
