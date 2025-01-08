const xs = [1, 2, 3];
const x0 = xs[0]; // OK
const x1 = xs['1'];
// ~~~ Element implicitly has an 'any' type
//      because index expression is not of type 'number'
function get(array, k) {
    return array[k];
    // ~ Element implicitly has an 'any' type
    //   because index expression is not of type 'number'
}
export default {};
