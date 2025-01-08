function setLanguage(language) {
    /* ... */
}
// Parameter is a (latitude, longitude) pair.
function panTo(where) {
    /* ... */
}
panTo([10, 20]); // OK
const loc = [10, 20];
panTo(loc);
//    ~~~ Argument of type 'number[]' is not assignable to
//        parameter of type '[number, number]'
export default {};
