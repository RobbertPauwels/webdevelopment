document.getElementById("btnToon").addEventListener("click", toonMetSpaties);

function toonMetSpaties() {
    let tekst = document.getElementById("tekstInput").value;

    let resultaat = "";

    for (let i = 0; i < tekst.length; i++) {
        resultaat += tekst[i] + " ";
    }

    console.log(resultaat);
}
