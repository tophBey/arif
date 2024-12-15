
const roles = ["Jr Frontend Developer", "Jr Backend Developer", "Jr Web Developer"]

let currentRole = 0
let charIndex = 0;
const typingSpeed = 100;
const delayBetweenRoles = 1500;

function typeEffect() {
  const typingContainer = document.getElementById("typing");
  // typingContainer.textContent = roles[currentRole];
  // currentRole = (currentRole + 1) % roles.length;
  // setTimeout(typeEffect, 4000); // Change role every 4 seconds

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


let buttonDetail2 = document.getElementById('show2')


buttonDetail2.addEventListener("click", () => {
  
  window.open("https://github.com/tophBey/barang", "_blank");
  
});

// buttonDetail1.addEventListener("click", () => {
  
//   if (deskripsi1.style.height === "50px" || deskripsi1.style.height === "") {
//       deskripsi1.style.height = "auto"; 
//       buttonDetail1.textContent = "Read Less"; 
//   } else {
//       deskripsi1.style.height = "50px"; 
//       buttonDetail1.textContent = "Read More"; 
//   }
// });





const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth + 5;
let currentPosition = 0;



function moveCarousel() {
  currentPosition -= 0.5; // Geser carousel ke kiri sedikit demi sedikit
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

// Mulai pergerakan carousel
moveCarousel();

