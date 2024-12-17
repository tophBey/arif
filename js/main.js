
const roles = ["Jr Frontend Developer", "Jr Backend Developer", "Jr Web Developer"]

let currentRole = 0
let charIndex = 0;
const typingSpeed = 100;
const delayBetweenRoles = 1500;

function typeEffect() {
  const typingContainer = document.getElementById("typing");
 
  if (charIndex === roles[currentRole].length) {
    setTimeout(() => {
      charIndex = 0;
      currentRole = (currentRole + 1) % roles.length;
      typingContainer.textContent = "";
      typeEffect();
    }, delayBetweenRoles);
    return;
  }


  typingContainer.textContent += roles[currentRole][charIndex];
  charIndex++;

  setTimeout(typeEffect, typingSpeed);

}

typeEffect()


const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
let link = document.querySelector('.link')
let linkAbout = document.querySelector('.about')
let linkPorto = document.querySelector('.portfolio')
let linkContact = document.querySelector('.contact')

const isMobile = () => window.innerWidth < 768;


menuToggle.addEventListener('click', () => {

  if (isMobile()) {
    link.classList.toggle('h-[190px]');
  }

});

linkAbout.addEventListener('click', () => {
  if (isMobile()) {
    link.classList.toggle('h-[190px]');
  }
})
linkPorto.addEventListener('click', () => {
  if (isMobile()) {
    link.classList.toggle('h-[190px]');
  }
})
linkContact.addEventListener('click', () => {
  if (isMobile()) {
    link.classList.toggle('h-[190px]');
  }
})


let buttonDetail2 = document.getElementById('show2')
let instagram = document.querySelector('.instagram')
let linkedin = document.querySelector('.linkedin')
let whatsApp = document.querySelector('.whatapp')


buttonDetail2.addEventListener("click", () => {
  window.open("https://github.com/tophBey/barang", "_blank");
});

instagram.addEventListener("click", () => {
  window.open("https://www.instagram.com/a_riifff/", "_blank");
});

linkedin.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/muhamad-arif-985609202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", "_blank");
});

whatsApp.addEventListener("click", () => {

  const phoneNumber = "6287880785245";
        const message = encodeURIComponent("Halo, saya tertarik untuk berbicara dengan Anda");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        
        
        window.open(whatsappUrl, "_blank");

});







const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth + 5;
let currentPosition = 0;



function moveCarousel() {
  currentPosition -= 0.5; 
  carousel.style.transform = `translateX(${currentPosition}px)`;

  
  if (Math.abs(currentPosition) >= cardWidth) {
    carousel.appendChild(carousel.firstElementChild);
    carousel.style.transition = 'none';
    currentPosition += cardWidth; 
    carousel.style.transform = `translateX(${currentPosition}px)`;
  }
  setTimeout(() => {
    carousel.style.transition = 'transform   ease-in'; 
  }, 0);
  
  requestAnimationFrame(moveCarousel);

  
}


moveCarousel();


const carousel2 = document.querySelector('.carousel2');
const cards2 = document.querySelectorAll('.card2');
const cardWidth2 = cards2[0].offsetWidth + 5;
let currentPosition2 = 0;



function moveCarousel2() {
  currentPosition2 -= 0.5; 
  carousel2.style.transform = `translateX(${currentPosition2}px)`;

  
  if (Math.abs(currentPosition2) >= cardWidth2) {
    carousel2.appendChild(carousel2.firstElementChild);
    carousel2.style.transition = 'none';
    currentPosition2 += cardWidth2; 
    carousel2.style.transform = `translateX(${currentPosition2}px)`;
  }
  setTimeout(() => {
    carousel2.style.transition = 'transform   ease-in'; 
  }, 0);
  
  requestAnimationFrame(moveCarousel2);

  
}


moveCarousel2();


const carousel3 = document.querySelector('.carousel3');
const cards3 = document.querySelectorAll('.card3');
const cardWidth3 = cards3[0].offsetWidth + 5; 
let currentPosition3 = 0;

function moveCarousel3() {
  currentPosition3 += 0.5; 
  carousel3.style.transform = `translateX(${currentPosition3}px)`;

  
  if (currentPosition3 >= cardWidth3) {
    carousel3.style.transition = 'none'; 
    currentPosition3 -= cardWidth3; 
    carousel3.style.transform = `translateX(${currentPosition3}px)`;
    carousel3.insertBefore(carousel3.lastElementChild, carousel3.firstElementChild); 
  }

  setTimeout(() => {
    carousel3.style.transition = 'transform ease-in'; 
  }, 0);

  requestAnimationFrame(moveCarousel3); 
}


moveCarousel3();



