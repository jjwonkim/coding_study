const square = (x) => x * x;
function assertType(x) { }
const double = (x) => 2 * x;
let p = null;
assertType(p);
//                           ~ Argument of type '[number]' is not
//                             assignable to parameter of type [number, number]
let r = null;
assertType(r); // OK
export default {};
