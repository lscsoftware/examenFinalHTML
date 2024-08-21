/*---------------------------------------------------*/
/*-----Cambio de color de la barra de Navegación-----*/
/*---------------------------------------------------*/
function cambioBarra () {
    const nav = document.querySelector("nav"); /*Definimos la variable para acotar el codigo*/
    const links = document.querySelectorAll("nav ul li a"); /*Definimos la variable para acotar el codigo*/

    if (window.scrollY > window.innerHeight * 0.2) { /*Se compara la posición del scroll*/
        nav.classList.add("scroll");                 /*Aplicamos la propiedad del CSS donde cambiamos de color la barra*/
        for (let i = 0; i < links.length; i++) {     /*Aplicamos la propiedad CSS usando FOR para que cambie todas la etiquetas A dentro del NAV UL LI*/
            links[i].classList.add("scroll2");
        }
    } else {
        nav.classList.remove("scroll");              /*Removemos todos los cambios al regresar a la posición original en pantalla*/
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove("scroll2");
        }
    }
}

 window.addEventListener("scroll", cambioBarra);


 /*---------------------------------------------------*/
 /*--------------- Juego de las Imagenes -------------*/
 /*---------------------------------------------------*/

 function iniciar() {
     var imagenes = document.querySelectorAll('#imagenes img');
     var zonasSoltar = document.querySelectorAll('.zona-soltar');

     for (var i = 0; i < imagenes.length; i++) {
         imagenes[i].draggable = true; // Hace que la imagen sea arrastrable
         imagenes[i].addEventListener('dragstart', function(e) {
             e.dataTransfer.setData('id', e.target.id);
         });
     }

     for (var j = 0; j < zonasSoltar.length; j++) {
         zonasSoltar[j].addEventListener('dragover', function(e) {
             e.preventDefault();
         });

         zonasSoltar[j].addEventListener('drop', function(e) {
             e.preventDefault();
             var id = e.dataTransfer.getData('id');
             var imagen = document.getElementById(id);
             imagen.style.display = 'none';
             e.target.innerHTML = '<img src="' + imagen.src + '" height="100" width="100">'; // Ajusta el tamaño según sea necesario
         });
     }
 }

 function reinicio() {
     window.location.reload(); // Reinicia la página para empezar de nuevo
 }

 iniciar();

 /*---------------------------------------------------*/
 /*--------------- Reproductor de Video --------------*/
 /*---------------------------------------------------*/

 // Seleccionar elementos del DOM
const video = document.getElementById('video');
const playBoton = document.getElementById('play');
const pauseBoton = document.getElementById('pause');
const contador = document.getElementById('contador');
const progress = document.getElementById('progress');

// Función para actualizar el contador y la barra de progreso
function actualizarContadorYProgreso() {
    // Calcular el tiempo transcurrido en minutos y segundos
    const minutos = Math.floor(video.currentTime / 60);
    const segundos = Math.floor(video.currentTime % 60);
    contador.innerText = `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

    // Actualizar la barra de progreso
    progress.value = (video.currentTime / video.duration) * 100;
}

// Evento para reproducir el video
playBoton.addEventListener('click', () => {
    video.play();
    setInterval(actualizarContadorYProgreso, 1000); // Actualizar cada segundo
});

// Evento para pausar el video
pauseBoton.addEventListener('click', () => {
    video.pause();
});

// Evento para controlar la barra de progreso
progress.addEventListener('input', () => {
    const nuevoTiempo = (progress.value / 100) * video.duration;
    video.currentTime = nuevoTiempo; // Cambiar el tiempo actual del video
});

// Evento para actualizar el contador y la barra de progreso al inicio
video.addEventListener('loadedmetadata', () => {
    const minutosDuracion = Math.floor(video.duration / 60);
    const segundosDuracion = Math.floor(video.duration % 60);
    contador.innerText = `${minutosDuracion < 10 ? '0' : ''}${minutosDuracion}:${segundosDuracion < 10 ? '0' : ''}${segundosDuracion}`;
});
