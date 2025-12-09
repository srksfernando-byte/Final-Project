const hamburgerDiv = document.querySelector('.hamburger');     // the container
const hamburgerImg = document.querySelector('.hamburger img'); // the image
const navMenu = document.querySelector('nav ul');

// lalabas yung menu pag clinick yung watermelon
hamburgerDiv.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  
  // also spin the image
  hamburgerImg.classList.add('spin');
  setTimeout(() => {
    hamburgerImg.classList.remove('spin');
  }, 500); // match CSS transition duration
});
