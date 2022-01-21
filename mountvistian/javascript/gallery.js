// Navbar
const menBtn = document.getElementById('menu-btn');

const navbar = document.getElementById('navbar');

const menu = document.querySelector('.menu');

const hideItems = document.querySelector('.list');
//making a variable for hiding links when click on hamburger

menBtn.addEventListener('click', () => {

    // toggle menu/close
    menu.classList.toggle('menu-open');

    // hideItems.style.display = "none";
    hideItems.classList.toggle('nope');
});


// px offset when the navbar activates
const offset = 280;

// add scroll event listener to the page 
window.addEventListener("scroll", () =>{
    // if the page is scroll by 50px
    // using scrollY instead of pageYOffset
    if (window.scrollY > offset){

        // activate navbar 
        navbar.classList.add('navbar-activate');
    }
    else{
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
function toggleForm(){
    const contain = document.querySelector('.cont');
    contain.classList.toggle('active');
}

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)