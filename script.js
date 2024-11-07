//HEADER
let currentIndex = 1;
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const firstClone = slides[0].cloneNode(true);  // Clonar la primera imagen
const lastClone = slides[totalSlides - 1].cloneNode(true);  // Clonar la última imagen

// Agregamos los clones al carrusel
slidesContainer.appendChild(firstClone);
slidesContainer.insertBefore(lastClone, slides[0]);

// Ajustamos el ancho de las imágenes
const slideWidth = slides[0].clientWidth;
slidesContainer.style.transform = `translateX(${-slideWidth}px)`;  // Empezamos desde la primera imagen

function nextSlide() {
    // Animamos el deslizamiento
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
    currentIndex++;
    slidesContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

    // Cuando llegamos al último slide (clon del primero)
    slidesContainer.addEventListener('transitionend', function() {
        if (currentIndex === totalSlides + 1) {  // Si estamos en el clon del primero
            slidesContainer.style.transition = 'none';  // Desactivamos la transición
            currentIndex = 1;  // Volvemos al primero de verdad
            slidesContainer.style.transform = `translateX(${-slideWidth}px)`;
        }
    });
}

// Desliza cada 3 segundos
setInterval(nextSlide, 5000);


//BODY

let indiceActual = 0;
const contenido = document.querySelector('.carrusel-contenido');
const puntos = document.querySelectorAll('.punto');

function mostrarCarrusel(indice) {
    indiceActual = indice;
    contenido.style.transform = `translateX(-${indice * 100}%)`;
    actualizarPuntos();
}

function actualizarPuntos() {
    puntos.forEach((punto, index) => {
        punto.classList.toggle('active', index === indiceActual);
    });
}

// Inicializa el carrusel
mostrarCarrusel(indiceActual);

//flechas

function mostrarCarrusel(indice) {
    if (indice < 0) {
        indiceActual = 0; // Limita a 0 si intenta ir a la izquierda
    } else if (indice >= puntos.length) {
        indiceActual = puntos.length - 1; // Limita al último índice
    } else {
        indiceActual = indice;
    }
    contenido.style.transform = `translateX(-${indiceActual * 100}%)`;
    actualizarPuntos();
}

