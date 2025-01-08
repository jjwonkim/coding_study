const square = (x) => x * x;
function assertType(x) { }
const beatles = ['john', 'paul', 'george', 'ringo'];
assertType(map(beatles, name => ({
    name,
    inYellowSubmarine: name === 'ringo',
}))); // OK
export default {};
