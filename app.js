// Existing JavaScript code
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = '#29323c';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});

// Enhanced gyroscope effect
window.addEventListener('deviceorientation', (event) => {
  const x = event.beta; // In degrees [-180, 180)
  const y = event.gamma; // In degrees [-90, 90)

  // Scale the effect to make it more pronounced
  const rotateX = (x / 2).toFixed(2); // Adjust divisor to control intensity
  const rotateY = (y / 2).toFixed(2); // Adjust divisor to control intensity

  // Apply a rotation effect to contact items based on device orientation
  const contactItems = document.querySelectorAll('.contact-item');
  contactItems.forEach((item) => {
    item.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  });
});
