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
    var input_nombre = document.getElementById("nombre");
    var input_invocador =document.getElementById("invocador");
    var input_email = document.getElementById("email");
    var input_submit = document.getElementById("submit");

    document.getElementById("formulario").addEventListener("submit", function(event){
        event.preventDefault();
        var nombre = input_nombre.value;
        var invocador = input_invocador.value;
        var email = input_email.value;

        localStorage.setItem("nombre", nombre);
        localStorage.setItem("invocador", invocador);
        localStorage.setItem("email", email);

        window.location.href = "fdb.html";    
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var nombre = localStorage.getItem('nombre');
    if (nombre) {
        document.getElementById('name-placeholder').textContent = nombre;
        localStorage.removeItem('nombre'); // Limpia el nombre después de usarlo
    }

    var invocador = localStorage.getItem('invocador');
    if (invocador) {
        document.getElementById('invocador-placeholder').textContent = invocador;
        localStorage.removeItem('invocador'); // Limpia el invocador después de usarlo
    }

    var email = localStorage.getItem('email');
    if (email) {
        document.getElementById('email-placeholder').textContent = email;
        localStorage.removeItem('email'); // Limpia el email después de usarlo
    }

    document.getElementById('btnRegresar').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});

/* 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnRegresar').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
 */