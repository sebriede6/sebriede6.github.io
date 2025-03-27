const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundAlpha: 0,
});
document.body.appendChild(app.view);

const symbols = "01<>/{}[]+=-";
const particles = [];

function createParticle() {
    const text = new PIXI.Text(symbols[Math.floor(Math.random() * symbols.length)], {
        fontSize: 16,
        fill: 0x00ffff
    });
    text.x = Math.random() * window.innerWidth;
    text.y = -20;
    app.stage.addChild(text);
    particles.push(text);
}

function animate() {
    particles.forEach((p, index) => {
        p.y += 3;
        if (p.y > window.innerHeight) {
            app.stage.removeChild(p);
            particles.splice(index, 1);
        }
    });
}

setInterval(createParticle, 100);
app.ticker.add(animate);
