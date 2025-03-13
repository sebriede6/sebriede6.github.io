const myImage = document.querySelector(".responsive-image");
const badgeImage = document.getElementById("badge");
const zertImage = document.getElementById("zert");


// Event Listener für das erste Bild
myImage.addEventListener("mouseover", () => {
  myImage.style.transition = "transform 0.3s ease-in-out";
  myImage.style.transform = "scale(1.5) translate(50px, 50px)";
  myImage.style.zIndex = "10"; // Stellt sicher, dass das Bild im Vordergrund bleibt
});

myImage.addEventListener("mouseout", () => {
  myImage.style.transition = "transform 0.3s ease-in-out";
  myImage.style.transform = "scale(1) translate(0, 0)";
  myImage.style.zIndex = "1"; // Setzt das Bild wieder in den Hintergrund
});

// Event Listener für das zweite Bild (Badge)
badgeImage.addEventListener("mouseover", () => {
  badgeImage.style.transition = "transform 0.3s ease-in-out";
  badgeImage.style.transform = "scale(1.5) translate(50px, 50px)";
  badgeImage.style.zIndex = "10"; // Stellt sicher, dass das Badge im Vordergrund bleibt
});

badgeImage.addEventListener("mouseout", () => {
  badgeImage.style.transition = "transform 0.3s ease-in-out";
  badgeImage.style.transform = "scale(1) translate(0, 0)";
  badgeImage.style.zIndex = "1"; // Setzt das Badge wieder in den Hintergrund
});

// Event Listener für das dritte Bild (Zertifikat)
zertImage.addEventListener("mouseover", () => {
  zertImage.style.transition = "transform 0.3s ease-in-out";
  zertImage.style.transform = "scale(1.5) translate(50px, 50px)";
  zertImage.style.zIndex = "10"; // Stellt sicher, dass das Zertifikat im Vordergrund bleibt
});

zertImage.addEventListener("mouseout", () => {
  zertImage.style.transition = "transform 0.3s ease-in-out";
  zertImage.style.transform = "scale(1) translate(0, 0)";
  zertImage.style.zIndex = "1"; // Setzt das Zertifikat wieder in den Hintergrund
});
