// slider
const title = document.querySelector('.title');
const cap = document.querySelectorAll('.captions > div');
const pag = document.querySelectorAll('.pag');
const slideNum = document.querySelector('.slide-count');
const header = document.querySelector('header');
const pack = document.querySelector('.packages');
const scr = 330;

let id = 0;
//array with image paths for the slider
const images = ['./images/mountman-4.jpg', './images/jack2.jpg', './images/Mount-Everest.jpg'];

function slider(i) {
    //  set bg image dynamically
    header.style.background = `url(${images[i]}) no-repeat center`;

    //for toggle active class
    //remove active class from all
    for (let i = 0; i < pag.length; i++) {
        // remove active from pagination
        pag[i].classList.remove('pag-active');
        //remove active from captions
        cap[i].classList.remove('cap-active');
    };

    // reset active class to click pagination
    pag[i].classList.add('pag-active');

    //reset active class to caption
    cap[i].classList.add('cap-active');

    //change title
    title.innerText = cap[i].lastElementChild.innerText;

    //animate title
    title.classList.add('animate__fadeInUp');

    //animate packages
    pack.classList.add('animate__fadeInUp');
    // add scroll event listener to the page 
    window.addEventListener("scroll", () => {
        // if the page is scroll by 330px
        if (window.scrollY > scr) {
            // activate animation 
            pack.classList.add('animate__fadeInUp');
        }
        else {
            //deactivate animation
            pack.classList.remove('animate__fadeInUp');
        }
    });



    //remove animate once finished
    setTimeout(() => {
        // remove Animation
        title.classList.remove('animate__fadeInUp');

    }, 300);

    //change slide number
    slideNum.innerHTML = `0${i + 1}/<sup>0${pag.length}</sup>`;
}

//pagination controls
for (let i = 0; i < pag.length; i++) {
    //add click event for all pagination
    pag[i].addEventListener('click', () => {
        //run the slider function
        slider(i);

        //set id to clicked pagination index
        id = i;
        //stop auto slide
        stopAutoSlide()

    });
}

function nextSlide() {
    //increment image id
    id++;
    //check if id is greater than the number of available sildes
    if (id > pag.length - 1) {

        id = 0;
    }
    //run the slider function
    slider(id);
}

// automate slider 

let autoSlide = setInterval(nextSlide, 4000);

//stop automatic slide

function stopAutoSlide() {

    clearInterval(autoSlide);

    //restart autoslider
    autoSlide = setInterval(nextSlide, 4000);

}

// get the current year and add it into the html 
document.querySelector(".year").innerHTML = new Date().getFullYear();

// Navbar

const menBtn = document.getElementById('menu-btn');

const navbar = document.getElementById('navbar');

const menu = document.querySelector('.menu');

//making a variable for hiding links when click on hamburger
const hideItems = document.querySelector('.list');

menBtn.addEventListener('click', () => {

    // toggle menu/close
    menu.classList.toggle('menu-open');

    // hideItems.style.display = "none";
    hideItems.classList.toggle('nope');
});


// px offset when the navbar activates
const offset = 40;

// add scroll event listener to the page 
window.addEventListener("scroll", () => {
    // if the page is scroll by 50px
    // using scrollY instead of pageYOffset
    if (window.scrollY > offset) {

        // activate navbar 
        navbar.classList.add('navbar-activate');
    }
    else {
        //deactivate navbar
        navbar.classList.remove('navbar-activate');
    }
});

// to show form when click in signup button

const formBtn = document.querySelector('#Sign-Btn');
const signForm = document.querySelector('.login-form-container');
const formClose = document.querySelector('#form-close');
const userBtn = document.getElementById('user-btn');

formBtn.addEventListener('click', () => {

    signForm.classList.add('active');
});

formClose.addEventListener('click', () => {

    signForm.classList.remove('active');
});


// javscript to show login/signUp form when click on user icon
userBtn.addEventListener('click', () => {

    signForm.classList.add('active');
});

//function to toggle the form
function toggleForm() {
    const contain = document.querySelector('.cont');
    contain.classList.toggle('active');
}

/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 200){
        scrollUp.classList.add('show-scroll')
    }
    else 
    {
       scrollUp.classList.remove('show-scroll')
    }
};

window.addEventListener('scroll', scrollUp)
// Developer's contact Details
//Phone: 03119891552, 03122253548
//Email IDs: misbahtarique786@gmail.com , mshahab794@gmail.com 
// usmangr8ut@gmail.com , syedmehsumalishah@gmail.com
