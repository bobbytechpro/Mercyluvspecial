
const heroFoods = [
  {
    image: './images/hero1.jpeg',
    title: 'Italian Pasta',
    price: '$24',
    desc: 'Fresh ingredients, premium sauce, and handcrafted flavors.'
  },
  {
    image: './images/hero2.jpeg',
    title: 'Cheese Pizza',
    price: '$18',
    desc: 'Stone-baked pizza with creamy mozzarella and organic toppings.'
  },
  {
    image: './images/hero3.jpeg',
    title: 'Classic Burger',
    price: '$22',
    desc: 'Juicy grilled burger layered with premium cheese and signature sauce.'
  },
  {
    image: './images/hero4.jpeg',
    title: 'Healthy Salad',
    price: '$15',
    desc: 'Fresh vegetables mixed with luxury dressing and natural ingredients.'
  },
   {
    image: './images/hero5.jpeg',
    title: 'Classic Burger',
    price: '$22',
    desc: 'Juicy grilled burger layered with premium cheese and signature sauce.'
  },
   {
    image: './images/hero6.jpeg',
    title: 'Classic Burger',
    price: '$22',
    desc: 'Juicy grilled burger layered with premium cheese and signature sauce.'
  },
   {
    image: './images/hero7.jpeg',
    title: 'Classic Burger',
    price: '$22',
    desc: 'Juicy grilled burger layered with premium cheese and signature sauce.'
  },
   {
    image: './images/hero8.jpeg',
    title: 'Classic Burger',
    price: '$22',
    desc: 'Juicy grilled burger layered with premium cheese and signature sauce.'
  }
];

let currentFood = 0;

const heroFoodImage = document.getElementById('heroFoodImage');
const heroFoodTitle = document.getElementById('heroFoodTitle');
const heroFoodPrice = document.getElementById('heroFoodPrice');
const heroFoodDesc = document.getElementById('heroFoodDesc');

function changeHeroFood() {
  currentFood = (currentFood + 1) % heroFoods.length;

  heroFoodImage.style.opacity = '0';
  heroFoodTitle.style.opacity = '0';
  heroFoodPrice.style.opacity = '0';
  heroFoodDesc.style.opacity = '0';

  setTimeout(() => {
    heroFoodImage.src = heroFoods[currentFood].image;
    heroFoodTitle.textContent = heroFoods[currentFood].title;
    heroFoodPrice.textContent = heroFoods[currentFood].price;
    heroFoodDesc.textContent = heroFoods[currentFood].desc;

    heroFoodImage.style.opacity = '1';
    heroFoodTitle.style.opacity = '1';
    heroFoodPrice.style.opacity = '1';
    heroFoodDesc.style.opacity = '1';
  }, 400);
}

setInterval(changeHeroFood, 5000);

// Mobile Menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});


// Dark Mode
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {

  document.body.classList.toggle('dark-mode');

  if(document.body.classList.contains('dark-mode')) {
    darkModeToggle.innerHTML = '☀️';
  } else {
    darkModeToggle.innerHTML = '🌙';
  }

});
// Full Menu Toggle
// MENU FILTER
const filterBtns = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterBtns.forEach(btn => {

  btn.addEventListener('click', () => {

    // Active button
    filterBtns.forEach(button => {
      button.classList.remove('active-filter');
    });

    btn.classList.add('active-filter');

    const filter = btn.getAttribute('data-filter');

    menuItems.forEach(item => {

      if(filter === 'all') {
        item.style.display = 'block';
      }

      else if(item.classList.contains(filter)) {
        item.style.display = 'block';
      }

      else {
        item.style.display = 'none';
      }

    });

  });

});



// ===========================
// SPECIAL OFFER COUNTDOWN
// ===========================

const offerDate = new Date();
offerDate.setDate(offerDate.getDate() + 7);

function updateCountdown() {

  const now = new Date().getTime();
  const distance = offerDate - now;

  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60))
    / 1000
  );

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

mobileMenu.classList.remove("translate-x-full");
mobileMenu.classList.add("translate-x-full");


const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

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