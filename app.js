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


document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typewriter-text');
    const cursorElement = document.querySelector('.cursor');
    const words = [
        'Hello, This is Ragul',
        'A Passionate Dreamer Chasing Goals',
        'A Creative Mind Crafting Unique Solutions',
        'An Innovator Turning Ideas into Reality',
        'An Achiever Dedicated to Lifelong Learning'
    ];

    function typeWriter() {
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            if (charIndex < currentWord.length && !isDeleting) {
                textElement.textContent += currentWord[charIndex];
                charIndex++;
                setTimeout(type, 80); // Adjust typing speed
            } else if (isDeleting) {
                if (charIndex > 0) {
                    textElement.textContent = currentWord.substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(type, 60); // Adjust erasing speed
                } else {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                    setTimeout(type, 300); // Wait before typing next word
                }
            } else {
                isDeleting = true;
                setTimeout(type, 1500); // Wait before erasing
            }
            updateCursor();
        }

        function updateCursor() {
            const isTyping = charIndex < words[wordIndex].length;
            cursorElement.style.transform = isTyping ? 'translateX(0)' : 'translateX(-1ch)'; // Move cursor slightly left when typing
        }

        type(); // Start typing loop
    }

    typeWriter(); // Initialize typewriter effect
});
