/*=============== LOADER ===============*/
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }
});

/*=============== SCROLL PROGRESS BAR ===============*/
window.addEventListener('scroll', () => {
  const scrollBar = document.getElementById('scroll-bar');
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  
  if (scrollBar) {
    scrollBar.style.width = scrollPercentage + '%';
  }
});

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(window.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== TYPING ANIMATION ===============*/
const typingText = document.querySelector('.typing-text');
const words = ['Computer Engineering Student.', 'Full-Stack Developer.', 'Tech Enthusiast.'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!typingText) return;

  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000; // Pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500; // Pause before new word
  }

  setTimeout(typeEffect, typeSpeed);
}
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeEffect, 1000);
});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	if(window.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = sectionId ? document.querySelector(`.nav__menu a[href*="${sectionId}"]`) : null;

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			if (sectionsClass) sectionsClass.classList.add('active-link')
		}else{
			if (sectionsClass) sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (themeButton) {
  if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
  }

  // Activate / deactivate the theme manually with the button
  themeButton.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      themeButton.classList.toggle(iconTheme);
      
      localStorage.setItem('selected-theme', getCurrentTheme());
      localStorage.setItem('selected-icon', getCurrentIcon());
  });
}

/*=============== SET CURRENT YEAR ===============*/
const yearElement = document.getElementById('current-year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/*=============== INITIALIZE AOS ===============*/
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });
});

/*=============== INITIALIZE PARTICLES.JS ===============*/
document.addEventListener('DOMContentLoaded', () => {
  if (window.particlesJS) {
    window.particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 40,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#7367f0"
        },
        "shape": {
          "type": "circle",
        },
        "opacity": {
          "value": 0.5,
          "random": true,
        },
        "size": {
          "value": 3,
          "random": true,
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#7367f0",
          "opacity": 0.2,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          }
        }
      },
      "retina_detect": true
    });
  }
});

/*=============== GSAP ANIMATIONS ===============*/
// Let's add a simple floating animation to the about image
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap !== 'undefined') {
    gsap.to('.about__img-wrapper', {
      y: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }
});

