
//Hamburger menu
const navToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener("click", () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove('nav-open');
    });
});


//Back to top button
const backToTopButton = document.querySelector('.back-to-top');
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
    backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
    backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
    backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

//reveal animations for page scroll
function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if(elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }

    }
}

window.addEventListener('scroll', reveal);

//to check the scroll position on page load
reveal();


//Scroll To Top Button
const btn = document.getElementById('top');

//when user scrolls down 20px from top of page show button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// //when the button is clicked, scroll to the top of the page
// btn.addEventListener('click', backToTop);

// function backToTop() {
//     document.body.scrollTop = 0; //for Safari
//     document.documentElement.scrollTop = 0; //for Chrome, Firefox, IE, and Opera
// }



window.addEventListener("scroll", () => {
    document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight));
    if (window.scrollY > 700) {
        isBackToTopRendered = true;
        alterStyles(isBackToTopRendered);
    } else {
        isBackToTopRendered = false;
        alterStyles(isBackToTopRendered);
    }

}, false);




document.getElementById('show-more-projects').addEventListener('click', () => {
    const addProjects = document.getElementById('additional-projects');
    if(addProjects.style.display == 'none') {
    addProjects.style.display = 'flex';
   } else {
    addProjects.style.display = 'none';
   }
})