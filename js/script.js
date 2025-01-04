const myImage = document.querySelector(".responsive-image");
const badgeImage = document.getElementById("badge");

// Event Listener für das erste Bild
myImage.addEventListener("mouseover", () => {
  myImage.style.transform = "scale(1.5) translate(50px, 50px)";
});

myImage.addEventListener("mouseout", () => {
  myImage.style.transform = "scale(1) translate(0, 0)";
});

// Event Listener für das zweite Bild (Badge)
badgeImage.addEventListener("mouseover", () => {
  badgeImage.style.transform = "scale(1.5) translate(50px, 50px)";
});

badgeImage.addEventListener("mouseout", () => {
  badgeImage.style.transform = "scale(1) translate(0, 0)";
});
