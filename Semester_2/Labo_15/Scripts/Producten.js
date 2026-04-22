const setup = () => {
    const btn = document.getElementById('herbereken');

    const parseEuro = (text) => {
        // parseFloat negeert trailing niet-cijfers zoals ' Eur'
        // Voorbeelden: "10.00 Eur" -> 10,   "3.99 Eur" -> 3.99
        const n = parseFloat(text.replace(',', '.'));
        return Number.isFinite(n) ? n : 0;
    };

    const parsePercentage = (text) => {
        // "21%" -> 21, "6%" -> 6
        const n = parseFloat(text.replace(',', '.'));
        return Number.isFinite(n) ? n : 0;
    };

    const herbereken = () => {
        const prijsCells = document.getElementsByClassName('prijs');
        const btwCells = document.getElementsByClassName('btw');
        const aantalInputs = document.getElementsByClassName('aantal');
        const subtotaalCells = document.getElementsByClassName('subtotaal');

        let totaal = 0;


        for (let i = 0; i < aantalInputs.length; i++) {
            const prijs = parseEuro(prijsCells[i].textContent);
            const btw = parsePercentage(btwCells[i].textContent); // in %
            const aantal = Number(aantalInputs[i].value) || 0;

            const factor = 1 + (btw / 100);
            const subtotaal = aantal * prijs * factor;

            subtotaalCells[i].textContent = `${subtotaal.toFixed(2)} Eur`;
            totaal += subtotaal;
        }

        document.getElementById('totaal').textContent = `${totaal.toFixed(2)} Eur`;
    };

    btn.addEventListener('click', herbereken);


    document.querySelectorAll('.aantal').forEach(inp => {
        inp.addEventListener('input', () => {
        });
    });

};

window.addEventListener('load', setup);
