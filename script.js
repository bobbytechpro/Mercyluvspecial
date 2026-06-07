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
  "./images/hero5.jpg",
  "./images/hero6.jpg",
  "./images/hero7.jpg",
  "./images/hero8.jpg",
  "./images/hero9.jpg"
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


const menuSearch = document.getElementById("menuSearch");

if(menuSearch){

  menuSearch.addEventListener("input", function(){

    const searchValue =
      this.value.toLowerCase();

    const menuItems =
      document.querySelectorAll(".menu-item");

    let found = 0;

    menuItems.forEach(item => {

      const foodName =
        item.dataset.name.toLowerCase();

      if(foodName.includes(searchValue)){

        item.style.display = "block";
        found++;

      }else{

        item.style.display = "none";

      }

    });

    const noResult =
      document.getElementById("noResult");

    if(noResult){

      if(found === 0){

        noResult.classList.remove("hidden");

      }else{

        noResult.classList.add("hidden");

      }

    }

  });

}




const filterBtns = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    // remove active class
    filterBtns.forEach(b =>
      b.classList.remove("active-filter")
    );

    btn.classList.add("active-filter");

    const filter = btn.dataset.filter;

    menuItems.forEach(item => {

      if (
        filter === "all" ||
        item.classList.contains(filter)
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }

    });

  });

});