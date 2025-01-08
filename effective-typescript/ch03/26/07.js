function setLanguage(language) {
    /* ... */
}
// Parameter is a (latitude, longitude) pair.
function panTo(where) {
    /* ... */
}
const loc = [10, 20];
panTo(loc);
// ~~~ Type 'readonly [10, 20]' is 'readonly'
//     and cannot be assigned to the mutable type '[number, number]'
export default {};
