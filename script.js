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

//calculadora de productos
function calcular() {
    // entrada de valores
    const tipoAgua = document.getElementById('tipoAgua').value;
    const volumen = parseInt(document.getElementById('volumen').value);
    let productos = '';

    if (volumen > 0) {
        // calcula los productos por tipo de agua y volumen
        const tabla = {
            aguaRed: [
                {volumen: 5, cloro: 0.5, sssAlum: 0.025, bp65: 0.025, bs77: 0.05},
                {volumen: 10, cloro: 0.5, sssAlum: 0.075, bp65: 0.075, bs77: 0.100},
                {volumen: 20, cloro: 1, sssAlum: 0.0100, bp65: 0.150, bs77: 0.200},
                // seguir agregando valores con la tabla
            ],
            aguaPozo1: [
                {volumen: 5, cloro: 0.5, sssAlum: 0.05, bp65: 0.05, bs77: 0.05},
                {volumen: 10, cloro: 0.5, sssAlum: 0.1, bp65: 0.15, bs77: 0.1},
                // seguir agregando valores con la tabla
            ],
            aguaPozo2: [
                {volumen: 5, cloro: 0.5, sssAlum: 0.075, bp65: 0.075, bs77: 0.05},
                {volumen: 10, cloro: 0.5, sssAlum: 0.15, bp65: 0.15, bs77: 0.1},
                // seguir agregando valores, ya entendiste
            ]
        };

        // Seleccionar resultado según el tipo de agua
        let data = tabla[tipoAgua].find(item => item.volumen === volumen);

        if (data) {
            productos = `
                <strong>Cloro:</strong> ${data.cloro} Lts<br>
                <strong>SSS Alum:</strong> ${data.sssAlum} Lts<br>
                <strong>BP65:</strong> ${data.bp65} Lts<br>
                <strong>BS77:</strong> ${data.bs77} Lts
            `;
        } else {
            productos = 'No se encontraron datos para el volumen especificado.';
        }
    } else {
        productos = 'Por favor, ingresa un volumen válido.';
    }

    // Mostrar resultado
    document.getElementById('resultado').innerHTML = productos;
}
