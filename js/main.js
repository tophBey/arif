
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


const carousel2 = document.querySelector('.carousel2');
const cards2 = document.querySelectorAll('.card2');
const cardWidth2 = cards2[0].offsetWidth + 5;
let currentPosition2 = 0;



function moveCarousel2() {
  currentPosition2 -= 0.5; // Geser carousel ke kiri sedikit demi sedikit
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

// Mulai pergerakan carousel
moveCarousel2();



// const carousel3 = document.querySelector('.carousel3');
// const cards3 = document.querySelectorAll('.card3');
// const cardWidth3 = cards3[0].offsetWidth + 5;
// let currentPosition3 = 0;

// function moveCarousel3() {
//   currentPosition3 -= 0.5; // Geser carousel ke kiri sedikit demi sedikit
//   carousel3.style.transform = `translateX(${currentPosition3}px)`;

  
//   // if (Math.abs(currentPosition3) >= cardWidth3) {
//   //   carousel3.appendChild(carousel3.firstElementChild);
//   //   carousel3.style.transition = 'none';
//   //   currentPosition3 += cardWidth3; 
//   //   carousel3.style.transform = `translateX(${currentPosition3}px)`;
//   // }

//   if (currentPosition3 >= cardWidth3) {
//     // Pindahkan elemen terakhir ke depan
//     carousel3.insertBefore(carousel3.lastElementChild, carousel3.firstElementChild);
//     carousel3.style.transition = 'none';
//     currentPosition3 -= cardWidth3; // Sesuaikan posisi setelah elemen dipindahkan
//     carousel3.style.transform = `translateX(${currentPosition3}px)`;
//   }
//   setTimeout(() => {
//     carousel3.style.transition = 'transform   ease-in'; 
//   }, 0);
  
//   requestAnimationFrame(moveCarousel3);

  
// }

const carousel3 = document.querySelector('.carousel3');
const cards3 = document.querySelectorAll('.card3');
const cardWidth3 = cards3[0].offsetWidth + 5; // Lebar kartu termasuk margin/padding
let currentPosition3 = 0;

function moveCarousel3() {
  currentPosition3 += 0.5; // Geser carousel ke kanan sedikit demi sedikit
  carousel3.style.transform = `translateX(${currentPosition3}px)`;

  // Jika sudah bergeser melebihi lebar satu kartu, pindahkan elemen pertama ke akhir
  if (currentPosition3 >= cardWidth3) {
    carousel3.style.transition = 'none'; // Nonaktifkan animasi sementara
    currentPosition3 -= cardWidth3; // Kurangi posisi untuk reset
    carousel3.style.transform = `translateX(${currentPosition3}px)`;
    carousel3.insertBefore(carousel3.lastElementChild, carousel3.firstElementChild); // Pindahkan elemen terakhir ke awal
  }

  setTimeout(() => {
    carousel3.style.transition = 'transform ease-in'; 
  }, 0);

  requestAnimationFrame(moveCarousel3); // Panggil ulang untuk animasi terus-menerus
}

// Mulai pergerakan carousel
moveCarousel3();



