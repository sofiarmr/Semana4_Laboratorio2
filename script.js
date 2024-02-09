//SOFÍA MARGARITA ROMERO RODRÍGUEZ - SMSS042622
//JEFFERSON JOSUÉ ESPERANZA ORTIZ - SMSS132422

// Función asociada al botón con ID 'btnClick1':
document.getElementById('btnClick1').addEventListener('click', function () {
    // Muestra una alerta al hacer clic en el botón 'btnClick1'
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Haz hecho click",
        showConfirmButton: false,
        timer: 1500
    });
});

// Función asociada al elemento con ID 'tulipIcon':
document.getElementById('tulipIcon').addEventListener('click', function () {
    // Aumenta el tamaño de la fuente del elemento 'tulipIcon' en 20px al hacer clic
    var currentSize = parseInt(this.style.fontSize) || 100; // Tamaño actual o 100px si no está definido
    var newSize = currentSize + 20; // Aumentar el tamaño en 20px
    this.style.fontSize = newSize + 'px';
});

    // Función asociada al texto con ID 'exampleText':
    document.getElementById('exampleText').addEventListener('click', function () {
        // Obtiene el texto actual del elemento
        var currentText = this.innerText;

        // Invierte el orden de los caracteres
        var reversedText = currentText.split('').reverse().join('');

        // Asigna el texto invertido al elemento
        this.innerText = reversedText;

        // Muestra un SweetAlert indicando que el texto ha sido invertido
        Swal.fire({
            title: 'Texto Invertido',
            text: 'El texto ha sido invertido con éxito.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    });


// Función asociada al elemento con ID 'inputFocus1':
document.getElementById('inputFocus1').addEventListener('focus', function () {
    // Cambia el borde del elemento 'inputFocus1' a un borde azul cuando recibe el foco
    this.style.border = '2px solid #17a2b8';
});

// Función asociada al botón con ID 'btnFocus2':
document.getElementById('btnFocus2').addEventListener('focus', function () {
    // Cambia el color de fondo del botón 'btnFocus2' a rojo cuando recibe el foco
    this.style.backgroundColor = 'red';
});

// Función asociada al área de texto con ID 'textareaFocus3':
document.getElementById('textareaFocus3').addEventListener('focus', function () {
    // Aumenta la altura del área de texto 'textareaFocus3' a 200px cuando recibe el foco
    this.style.height = '200px';
});

// Funciones asociadas al elemento con ID 'elemento1':
var elemento1 = document.getElementById('elemento1');
elemento1.addEventListener('mouseover', function () {
    // Cambia el color de fondo del 'elemento1' cuando el ratón pasa por encima
    elemento1.style.backgroundColor = '#F4F27E';
});
elemento1.addEventListener('mouseout', function () {
    // Cambia el color de fondo del 'elemento1' cuando el ratón sale
    elemento1.style.backgroundColor = '#C5FFF8';
});

// Función 'myEnterFunction':
let x = 0;
function myEnterFunction() {
    // Incrementa la variable 'x' y muestra el nuevo valor en el elemento 'demo2'
    document.getElementById("demo2").innerHTML = x += 1;
}

// Función asociada al evento 'DOMContentLoaded':
document.addEventListener('DOMContentLoaded', function () {
    // Configura eventos para cambiar la fuente de la imagen cuando el raton pasa por encima o sale
    var imagen = document.getElementById('imagen');

    if (imagen) {
        imagen.addEventListener('mouseover', function () {
            cambiarImagen('img/imagen2.png');
        });

        imagen.addEventListener('mouseout', function () {
            cambiarImagen('img/imagen1.png');
        });
    } else {
        console.error('La imagen no se encontró en el documento.');
    }

    function cambiarImagen(nuevaSrc) {
        if (imagen) {
            imagen.src = nuevaSrc;
        } else {
            console.error('La imagen no se encontró al intentar cambiar su fuente.');
        }
    }
});