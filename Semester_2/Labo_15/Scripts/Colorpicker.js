const setup = () => {
    const r = document.getElementById('r');
    const g = document.getElementById('g');
    const b = document.getElementById('b');

    const rOut = document.getElementById('rOut');
    const gOut = document.getElementById('gOut');
    const bOut = document.getElementById('bOut');

    const swatch = document.getElementById('swatch');
    const rgbText = document.getElementById('rgbText');

    const update = () => {
        rOut.textContent = r.value;
        gOut.textContent = g.value;
        bOut.textContent = b.value;

        const rgb = `rgb(${r.value}, ${g.value}, ${b.value})`;
        swatch.style.backgroundColor = rgb;
        rgbText.textContent = rgb;
    };

    document.querySelectorAll('.slider').forEach(slider => {
        slider.addEventListener('input', update);
        slider.addEventListener('change', update);
    });

    update(); // init
};

window.addEventListener('load', setup);
