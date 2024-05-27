document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.querySelector('.grande');
    const imagenes = document.querySelectorAll('.carrusel-item');
    const btnAnterior = document.querySelector('.btn-anterior');
    const btnSiguiente = document.querySelector('.btn-siguiente');

    let index = 0;

    btnAnterior.addEventListener('click', () => {
        index = (index === 0) ? imagenes.length - 1 : index - 1;
        actualizarCarrusel();
    });

    btnSiguiente.addEventListener('click', () => {
        index = (index === imagenes.length - 1) ? 0 : index + 1;
        actualizarCarrusel();
    });

    function actualizarCarrusel() {
        const anchoImagen = imagenes[0].clientWidth;
        contenedor.style.transform = `translateX(-${index * anchoImagen}px)`;
       
    }
});


document.addEventListener('DOMContentLoaded', function() {
//Paso1
var input_nombre = document.getElementById("nombre");
var input_submit = document.getElementById("submit");

//Paso2
document.getElementById("formulario").addEventListener("submit", function(event){

    event.preventDefault();

    //PAso3
    var nombre = input_nombre.value;

    //Paso4
    localStorage.setItem("nombre",nombre);
    window.location.href = "fdb.html";    
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var nombre = localStorage.getItem('nombre');
    if (nombre) {
        document.getElementById('name-placeholder').textContent = nombre;
        localStorage.removeItem('nombre'); // Limpia el nombre después de usarlo
    }
});