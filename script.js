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

const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.getElementById("body");

if(localStorage.getItem("theme") === "light"){
  body.classList.add("light-mode");
  darkModeToggle.innerHTML = "☀️";
}

darkModeToggle.addEventListener("click", () => {

  body.classList.toggle("light-mode");

  if(body.classList.contains("light-mode")){
    localStorage.setItem("theme", "light");
    darkModeToggle.innerHTML = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    darkModeToggle.innerHTML = "🌙";
  }

});

// SEARCH MENU

const searchInput = document.getElementById("menuSearch");
const menuItems = document.querySelectorAll(".menu-item");

searchInput.addEventListener("keyup", () => {

  const value = searchInput.value.toLowerCase();

  menuItems.forEach(item => {

    const foodName =
      item.getAttribute("data-name").toLowerCase();

    if(foodName.includes(value)){

      item.style.display = "block";

    } else {

      item.style.display = "none";

    }

  });

});