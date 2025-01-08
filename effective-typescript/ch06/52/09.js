const square = (x) => x * x;
function assertType(x) { }
const add = (a, b) => a + b;
assertType(add); // OK
const double = (x) => 2 * x;
assertType(double); // OK!?
export default {};
