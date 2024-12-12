const myImage = document.querySelector('.responsive-image');

myImage.addEventListener('mouseover', () => {
  myImage.style.transform = 'scale(1.5) translate(50px, 50px)'; 
});

myImage.addEventListener('mouseout', () => {
  myImage.style.transform = 'scale(1) translate(0, 0)'; 
});

