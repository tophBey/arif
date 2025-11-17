
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


let barang = document.getElementById('barang')
let bookStore = document.getElementById('bookStore')
let instagram = document.querySelector('.instagram')
let linkedin = document.querySelector('.linkedin')
let whatsApp = document.querySelector('.whatapp')
let smaPgri = document.getElementById('smaPGRI')


barang.addEventListener("click", () => {
  window.open("https://github.com/tophBey/barang", "_blank");
});

 bookStore.addEventListener("click", () => {
  window.open("https://github.com/tophBey/bookStore", "_blank");
});

instagram.addEventListener("click", () => {
  window.open("https://www.instagram.com/a_riifff/", "_blank");
});

smaPgri.addEventListener("click", () => {
  window.open("https://smapgri-sindangsono.sch.id/", "_blank");
});

linkedin.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/muhamad-arif-985609202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", "_blank");
});

whatsApp.addEventListener("click", () => {

  const phoneNumber = "6287880785245";
        const message = encodeURIComponent("Halo, saya ingin menghubungi Anda melalui WhatsApp.");
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
let toggleChecked = document.getElementById('toggleChecked');
let toggleChecked2 = document.getElementById('toggleChecked2');

let texts = document.querySelectorAll('.text-content');
let container = document.getElementById('container');
let yearSpan = document.getElementById('year');
let btnBanner = document.getElementById('btn-banner');
let currentYear = new Date().getFullYear();
let contentToggle = document.getElementById('contentToggle');
let contentToggle2 = document.getElementById('contentToggle2');
let cardBg = document.querySelectorAll('.card-bg');
let headingTitle = document.querySelectorAll('.heading-title');
let cardItem = document.querySelectorAll('.card-item');
let btnCardHover = document.querySelectorAll('.btn-card-hover');
let borderToggle = document.querySelectorAll('.toggle-border');
let hexagonToggle = document.querySelectorAll('.hexagon-toggle');
let iconToggle = document.querySelectorAll('.icon-toggle');
let navFootBg = document.querySelectorAll('.nav-foot-bg');
let logo = document.getElementById('logo');
let navItem = document.querySelectorAll('.nav-item');
let footItem = document.querySelectorAll('.foot-item');
let borderGroup = document.querySelectorAll('.border-group');
let borderFooter = document.querySelector('.border-footer');
// bg-[#1E1E1E]

function applyTheme(isDark) {
  if(contentToggle2){
    contentToggle2.textContent = isDark ? '☀️' : '🌔';
  }
  
  if(contentToggle){
    contentToggle.textContent = isDark ? '☀️' : '🌔';
  }

  container.classList.toggle('bg-[#0D1117]');
  logo.classList.toggle('bg-[#00E6F6]');
  logo.classList.toggle('bg-yellow-400');

  borderGroup.forEach((el) => {
    el.classList.toggle('border-[#00E6F6]');
    el.classList.toggle('border-yellow-400');
  })

  borderFooter.classList.toggle('border-t');
  borderFooter.classList.toggle('border-[#00E6F6]');
  borderFooter.classList.toggle('border-t-yellow-400');

  navItem.forEach((el) => {
    el.classList.toggle('lg:hover:bg-[#0D1117]');
    el.classList.toggle('sm:hover:bg-[#00E6F6]');
    el.classList.toggle('sm:hover:bg-yellow-400');
    el.classList.toggle('md:hover:bg-[#0D1117]');
    el.classList.toggle('lg:hover:bg-gray-100');
    el.classList.toggle('lg:hover:text-yellow-500');
  })

  btnBanner.classList.toggle('bg-[#00E6F6]');
  btnBanner.classList.toggle('border-[#00E6F6]');
  btnBanner.classList.toggle('hover:bg-[#0D1117]');
  btnBanner.classList.toggle('bg-yellow-400');
  btnBanner.classList.toggle('shadow-[#00E6F6]');
  btnBanner.classList.toggle('shadow-yellow-400');
  btnBanner.classList.toggle('hover:border-yellow-600');
  btnBanner.classList.toggle('hover:bg-white');
  btnBanner.classList.toggle('hover:text-yellow-500');

  iconToggle.forEach((el) => {
    el.classList.toggle('text-[#00E6F6]');
    el.classList.toggle('border-[#00E6F6]');
    el.classList.toggle('text-yellow-400');
    el.classList.toggle('border-yellow-400');
    el.classList.toggle('hover:bg-yellow-400');
  });

  navFootBg.forEach((el) => {
    el.classList.toggle('bg-[#0D1117]');
    el.classList.toggle('text-white');
    el.classList.toggle('border-[#00E6F6]');
    el.classList.toggle('border-yellow-400');  
    el.classList.toggle('bg-gray-100');
    el.classList.toggle('text-black');
  });

  texts.forEach((el) => el.classList.toggle('text-white'));

  cardBg.forEach((el) => {
    el.classList.toggle('bg-[#1E1E1E]');
   
    el.classList.toggle('bg-gray-100');
  });

  hexagonToggle.forEach((el) => {
    el.classList.toggle('bg-[#00E6F6]');
    el.classList.toggle('border-[#00E6F6]');
    el.classList.toggle('border-yellow-400');
    el.classList.toggle('bg-yellow-400');
  });

  headingTitle.forEach((el) => {
    el.classList.toggle('text-[#00E6F6]');
    el.classList.toggle('text-yellow-600');
  });

  cardItem.forEach((el) => {
    el.classList.toggle('bg-[#00E6F6]');
     el.classList.toggle('shadow-[#00E6F6]');
    el.classList.toggle('shadow-yellow-400');
    el.classList.toggle('bg-yellow-400');
  });

  btnCardHover.forEach((el) => {
    el.classList.toggle('hover:bg-[#00E6F6]');
    el.classList.toggle('shadow-lg');
    el.classList.toggle('hover:shadow-[#00E6F6]');
    el.classList.toggle('border-[#00E6F6]');
    el.classList.toggle('text-yellow-400');
    el.classList.toggle('hover:bg-yellow-500');
    el.classList.toggle('border-yellow-400');
    el.classList.toggle('hover:shadow-yellow-400');
  });

  borderToggle.forEach((el) => {
    el.classList.toggle('border-[#00E6F6]');
    el.classList.toggle('border-yellow-400');
  });

  footItem.forEach((el) => {
    el.classList.toggle('text-[#00E6F6]');
    el.classList.toggle('text-black');
  })
}


toggleChecked.addEventListener('change', () => {
  applyTheme(toggleChecked.checked);
});

toggleChecked2.addEventListener('change', () => {
  applyTheme(toggleChecked2.checked);
});




yearSpan.textContent = currentYear; 




