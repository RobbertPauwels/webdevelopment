const maakMetSpaties = (inputText) => {
    let result = "";

    for (let i = 0; i < inputText.length; i++) {
        result += inputText[i] + " ";
    }

    return result;
};

document.getElementById("btnToon").addEventListener("click", () => {
    let tekst = document.getElementById("tekstInput").value;

    let resultaat = maakMetSpaties(tekst);

    console.log(resultaat);

    if (tekst.indexOf("hond") !== -1) {
        console.log("De tekst bevat het woord 'hond'");
    } else {
        console.log("De tekst bevat het woord 'hond' niet");
    }
});
