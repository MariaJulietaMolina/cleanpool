//aca empiezan las calculadoras
//calculadora Arranque
function calcularArranque() {
    // entrada de valores
    const tipoAgua = document.getElementById('tipoAguaArranque').value;
    const volumen = parseInt(document.getElementById('volumenArranque').value);
    let productos = '';

    // Precios por tipo de agua
    const precios = {
        aguaRed: 100, // Precio para agua red
        aguaPozo1: 120, // Precio para agua pozo 1
        aguaPozo2: 140 // Precio para agua pozo 2
    };


    if (volumen > 0) {
        // calcula los productos por tipo de agua y volumen
        const tabla = {
            aguaRed: [
                { volumen: 5, cloro: 1, sssAlum: 0.100, bp65: 0.150, bs77: 0.150 },
                { volumen: 10, cloro: 1, sssAlum: 0.150, bp65: 0.250, bs77: 0.250 },
                { volumen: 20, cloro: 2, sssAlum: 0.150, bp65: 0.500, bs77: 0.500 },
                { volumen: 30, cloro: 3, sssAlum: 0.250, bp65: 0.500, bs77: 0.750 },
                { volumen: 40, cloro: 4, sssAlum: 0.250, bp65: 1, bs77: 1 },
                { volumen: 50, cloro: 5, sssAlum: 0.500, bp65: 1, bs77: 1.250 },
                { volumen: 60, cloro: 7.5, sssAlum: 0.500, bp65: 1, bs77: 1.5 },
                { volumen: 70, cloro: 7.5, sssAlum: 0.500, bp65: 1, bs77: 1.750 },
                { volumen: 80, cloro: 10, sssAlum: 1.0, bp65: 2, bs77: 2 },
                { volumen: 90, cloro: 10, sssAlum: 1.0, bp65: 2.0, bs77: 2.250 },
                { volumen: 100, cloro: 15, sssAlum: 1.0, bp65: 2.5, bs77: 2.5 },

            ],
            aguaPozo1: [
                { volumen: 5, cloro: 1, sssAlum: 0.150, bp65: 0.250, bs77: 0.150 },
                { volumen: 10, cloro: 2.5, sssAlum: 0.250, bp65: 0.500, bs77: 0.250 },
                { volumen: 20, cloro: 4, sssAlum: 0.500, bp65: 1, bs77: 0.500 },
                { volumen: 30, cloro: 5, sssAlum: 0.500, bp65: 1, bs77: 0.750 },
                { volumen: 40, cloro: 7.5, sssAlum: 0.750, bp65: 1.5, bs77: 1 },
                { volumen: 50, cloro: 10, sssAlum: 1, bp65: 2, bs77: 1.250 },
                { volumen: 60, cloro: 10, sssAlum: 1, bp65: 2.5, bs77: 1.5 },
                { volumen: 70, cloro: 15, sssAlum: 1, bp65: 2.5, bs77: 1.750 },
                { volumen: 80, cloro: 15, sssAlum: 2, bp65: 4, bs77: 2 },
                { volumen: 90, cloro: 20, sssAlum: 2, bp65: 4, bs77: 2.250 },
                { volumen: 100, cloro: 20, sssAlum: 2.5, bp65: 5, bs77: 2.5 },
            ],
            aguaPozo2: [
                { volumen: 5, cloro: 2.50, sssAlum: 0.500, bp65: 0.500, bs77: 0.150 },
                { volumen: 10, cloro: 5, sssAlum: 0.750, bp65: 1.5, bs77: 0.250 },
                { volumen: 20, cloro: 7.5, sssAlum: 1, bp65: 2, bs77: 0.500 },
                { volumen: 30, cloro: 15, sssAlum: 2, bp65: 2.5, bs77: 0.750 },
                { volumen: 40, cloro: 20, sssAlum: 2.5, bp65: 5, bs77: 1 },
                { volumen: 50, cloro: 20, sssAlum: 2.5, bp65: 5, bs77: 1.250 },
                { volumen: 60, cloro: 25, sssAlum: 2.5, bp65: 5, bs77: 1.5 },
                { volumen: 70, cloro: 30, sssAlum: 3.5, bp65: 5, bs77: 1.750 },
                { volumen: 80, cloro: 30, sssAlum: 5, bp65: 10, bs77: 2 },
                { volumen: 90, cloro: 35, sssAlum: 5, bp65: 10, bs77: 2.250 },
                { volumen: 100, cloro: 40, sssAlum: 5, bp65: 10, bs77: 2.5 },
            ],
        };

        // Seleccionar resultado según el tipo de agua
        let data = tabla[tipoAgua].find(item => item.volumen === volumen);

        if (data) {
            const precio = precios[tipoAgua] || 0; // Obtener el precio del tipo de agua
            const total = precio * volumen; // Calcular el total

            productos = `
                <strong>Cloro:</strong> ${data.cloro} Lts<br>
                <strong>SSS Alum:</strong> ${data.sssAlum} Lts<br>
                <strong>BP65:</strong> ${data.bp65} Lts<br>
                <strong>BS77:</strong> ${data.bs77} Lts<br>
                <strong>Precio total:</strong> $${total.toFixed(2)}
            `;
        } else {
            productos = 'No se encontraron datos para el volumen especificado.';
        }
    } else {
        productos = 'Por favor, ingresa un volumen válido.';
    }

    // Mostrar resultado
    document.getElementById('resultadoMantenimiento').innerHTML = productos;
}

//calculadora mantenimiento
function calcularMantenimiento() {
    // entrada de valores
    const tipoAgua = document.getElementById('tipoAguaMantenimiento').value;
    const volumen = parseInt(document.getElementById('volumenMantenimiento').value);
    let productos = '';

    if (volumen > 0) {
        // calcula los productos por tipo de agua y volumen
        const tabla = {
            aguaRed: [
                { volumen: 5, cloro: 0.3, sssAlum: 0.1, bp65: 0.05, bs77: 0.2 },
                { volumen: 10, cloro: 0.6, sssAlum: 0.2, bp65: 0.1, bs77: 0.4 },
                { volumen: 20, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 30, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 40, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 50, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 60, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 70, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 80, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 90, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 100, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                
            ],
            aguaPozo1: [
                { volumen: 5, cloro: 0.35, sssAlum: 0.15, bp65: 0.07, bs77: 0.25 },
                { volumen: 10, cloro: 0.7, sssAlum: 0.3, bp65: 0.14, bs77: 0.5 },
                { volumen: 20, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 30, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 40, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 50, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 60, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 70, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 80, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 90, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 100, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
            ],
            aguaPozo2: [
                { volumen: 5, cloro: 0.4, sssAlum: 0.18, bp65: 0.1, bs77: 0.3 },
                { volumen: 10, cloro: 0.8, sssAlum: 0.36, bp65: 0.2, bs77: 0.6 },
                { volumen: 20, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 30, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 40, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 50, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 60, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 70, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 80, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 90, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 100, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
            ],
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
    document.getElementById('resultadoMantenimiento').innerHTML = productos;
}

//calculadora recuperacion
function calcularRecuperacion() {
    // entrada de valores
    const tipoAgua = document.getElementById('tipoAguaRecuperacion').value;
    const volumen = parseInt(document.getElementById('volumenRecuperacion').value);
    let productos = '';

    if (volumen > 0) {
        // calcula los productos por tipo de agua y volumen
        const tabla = {
            aguaRed: [
                { volumen: 5, cloro: 0.5, sssAlum: 0.2, bp65: 0.3, bs77: 0.4 },
                { volumen: 10, cloro: 1, sssAlum: 0.4, bp65: 0.6, bs77: 0.8 },
                { volumen: 20, cloro: 2, sssAlum: 0.8, bp65: 1.2, bs77: 1.6 },
                { volumen: 30, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 40, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 50, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 60, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 70, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 80, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 90, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 100, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
            ],
            aguaPozo1: [
                { volumen: 5, cloro: 0.55, sssAlum: 0.25, bp65: 0.35, bs77: 0.5 },
                { volumen: 10, cloro: 1.1, sssAlum: 0.5, bp65: 0.7, bs77: 1 },
                { volumen: 20, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 30, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 40, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 50, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 60, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 70, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 80, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 90, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 100, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
            ],
            aguaPozo2: [
                { volumen: 5, cloro: 0.6, sssAlum: 0.3, bp65: 0.4, bs77: 0.6 },
                { volumen: 10, cloro: 1.2, sssAlum: 0.6, bp65: 0.8, bs77: 1.2 },
                { volumen: 20, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 30, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 40, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 50, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 60, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 70, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 80, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 90, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
                { volumen: 100, cloro: 1.2, sssAlum: 0.4, bp65: 0.2, bs77: 0.8 },
            ],
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
    document.getElementById('resultadoRecuperacion').innerHTML = productos;
}

// Manejar consideraciones
const consideraciones = document.querySelectorAll('.consideracionTitulo');

preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', function() {
        const contenedorConsideracion = this.parentNode;
        contenedorConsideracion.classList.toggle('pregunta-activa');
        const respuesta = contenedorConsideracion.querySelector('.cuerpoConsideracion');
        respuesta.style.display = respuesta.style.display === 'block' ? 'none' : 'block';
        const flecha = this.querySelector('.flecha');
        flecha.innerHTML = respuesta.style.display === 'block' ? '&#9652;' : '&#9662;';
    });
});
