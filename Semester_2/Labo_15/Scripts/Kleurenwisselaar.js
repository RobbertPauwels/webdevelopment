const setup = () => {
    const knoppen = document.querySelectorAll('.kleurknop');
    knoppen.forEach(knop => {
        knop.addEventListener('click', () => {
            knop.classList.toggle('blauw');
        });
    });
};

window.addEventListener('load', setup);
