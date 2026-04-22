function countWithIndexOf(text, query) {
    if (!query) return 0; // lege zoekterm -> 0
    let count = 0;
    let pos = 0;

    while (true) {
        const foundAt = text.indexOf(query, pos);
        if (foundAt === -1) break;
        count++;
        pos = foundAt + 1;
    }
    return count;
}

function countWithLastIndexOf(text, query) {
    if (!query) return 0;
    let count = 0;
    let pos = text.length - 1;

    while (true) {
        const foundAt = text.lastIndexOf(query, pos);
        if (foundAt === -1) break;
        count++;
        pos = foundAt - 1;
    }
    for(count = 0; count < pos; count++) {

    }
    return count;
}

const txtInput = document.getElementById('tekst');
const qInput = document.getElementById('zoek');
const out = document.getElementById('output');

document.getElementById('btn-indexof').addEventListener('click', () => {
    const text = txtInput.value;
    const query = qInput.value;

    const n = countWithIndexOf(text, query);
    out.textContent = `Resultaat (indexOf): "${query}" komt ${n} keer voor.`;
    console.log(`[indexOf] "${query}" ->`, n);
});

document.getElementById('btn-lastindexof').addEventListener('click', () => {
    const text = txtInput.value;
    const query = qInput.value;

    const n = countWithLastIndexOf(text, query);
    out.textContent = `Resultaat (lastIndexOf): "${query}" komt ${n} keer voor.`;
    console.log(`[lastIndexOf] "${query}" ->`, n);
});
``