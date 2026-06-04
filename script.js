const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

if(menuBtn){
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
  });
}

if(closeMenu){
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
  });
}



const heroImages = [
  "./images/hero1.jpeg",
  "./images/hero2.jpeg",
  "./images/hero3.jpeg",
  "./images/hero4.jpeg",
  "./images/hero5.jpeg"
];

let current = 0;

setInterval(() => {

  current++;

  if(current >= heroImages.length){
    current = 0;
  }

  document.getElementById("heroImage").src =
    heroImages[current];

}, 3000);



const allMenuBtn = document.getElementById("allMenuBtn");
const fullMenu = document.getElementById("fullMenu");

if (allMenuBtn && fullMenu) {
  allMenuBtn.addEventListener("click", () => {
    fullMenu.classList.toggle("hidden");

    fullMenu.scrollIntoView({
      behavior: "smooth"
    });
  });
}