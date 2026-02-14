const setup = () => {
    document.addEventListener("click", berekenen);
}

const berekenen = () => {
    const input = document.getElementById("input").value;
    const nmr1 = document.getElementById("nmr1").value;
    const nmr2 = document.getElementById("nmr2").value;
    let output = document.getElementById("output");

    const berekening = input.substring(nmr1, nmr2);
    output.textContent = berekening;
}

window.addEventListener("load", setup);