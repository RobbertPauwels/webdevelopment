const familieNamen = ['Pauwels', 'Devolder', 'Radu', 'Maene', 'Rhellam'];
console.log(familieNamen.length);
console.log(familieNamen[0] + ' - ' + familieNamen[2] + ' - ' + familieNamen[4]);
VoegNaamToe = (gegevennaam) => {
    familieNamen.push(gegevennaam);
    console.log(familieNamen);
}
VoegNaamToe(window.prompt('geef familinaam'));
console.log(familieNamen.join(' - '));
