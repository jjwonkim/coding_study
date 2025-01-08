const jackson5 = ['Jackie', 'Tito', 'Jermaine', 'Marlon', 'Michael'];
function isDefined(x) {
    return x !== undefined;
}
const members = ['Janet', 'Michael'].map(who => jackson5.find(n => n === who)).filter(isDefined); // Type is string[]
export default {};
