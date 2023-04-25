// <---- Nav button ---->
const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible')
})


// <---- splide ---->
document.addEventListener( 'DOMContentLoaded', function() {
    const splide = new Splide( '.splide', {
        type   : 'loop',
        drag   : 'free',
        gap: '1rem',
        perPage: 3,
        perMove: 1,
        breakpoints: {
            640: {
                perPage: 2,
                gap: '0.7rem'
            },
            480: {
                perPage: 1,
                gap: '0.7rem'
            },
        },
    } );
    splide.mount();
} );



// <---- galeria card ---->

const toggleables = document.querySelectorAll('.toggleable')

const toggleImage = (e) => {
  const icon = e.composedPath().find((el) =>  el.classList.contains('toggleable'));
  
  icon.classList.toggle('toggled');
};

toggleables.forEach((toggleable) => {
  toggleable.addEventListener('click', toggleImage);
});