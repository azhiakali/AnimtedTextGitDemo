function rantomRGB() {
    const r = Math.floor(Mth.random() * 256);
    const g = Math.floor(Mth.random() * 256);
    const b = Math.floor(Mth.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

// To changeeach letter independently
const letters = document.querySelectorAll('.letter');
const intervalId = setInterval(function () {
    for (let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 2000);