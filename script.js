const design_card_butttons = document.querySelectorAll('.design-card');
const introduction_text = document.querySelectorAll('.introduction-text');

const single_profile_card = document.querySelectorAll('.single-profile-card');
const testimonial_card = document.querySelectorAll('.testimonial-card');

design_card_butttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        introduction_text.forEach((introduction, introductionIndex) => {
            if (index === introductionIndex) {
                introduction.style.display = 'block';
            } else {
                introduction.style.display = 'none';
            }
        });
        design_card_butttons.forEach((btn, btnIndex) => {
            if (index === btnIndex) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
                
            }
        });
    });
});

single_profile_card.forEach((btn, index) => {
    btn.addEventListener('click', ()=> {
        testimonial_card.forEach((testimonialCard, testimonialCardIndex) => {
            if (index === testimonialCardIndex) {
                testimonialCard.style.display = 'block';
            } else {
                testimonialCard.style.display = 'none';
            }
        });
        single_profile_card.forEach((cardBtn, cardIndex) => {
            if (index === cardIndex) {
                cardBtn.classList.add('profile-card-active');
            } else {
                cardBtn.classList.remove('profile-card-active');
            }
        });
    });
});

// Obtén una referencia al botón "Trabajos" y al botón "Contacto"
const botonTrabajos = document.querySelector('.latest-work');
const botonContacto = document.querySelector('.CONTACT');
// Agrega un controlador de eventos para el botón "Trabajos"
botonTrabajos.addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    // Obtén la posición de la sección "Últimos trabajos"
    const ultimosTrabajos = document.getElementById('latest-works');
    const posicion = ultimosTrabajos.offsetTop;

    // Desplázate suavemente a la posición de la sección
    window.scrollTo({
        top: posicion,
        behavior: 'smooth'
    });
});

// Agrega un controlador de eventos para el botón "Contacto"
botonContacto.addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    // Obtén la posición de la sección "Contacto"
    const contacto = document.getElementById('footer');
    const posicion = contacto.offsetTop;

    // Desplázate suavemente a la posición de la sección
    window.scrollTo({
        top: posicion,
        behavior: 'smooth'
    });
});
