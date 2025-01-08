function double(x) {
    return x + x;
}
const num = double(12); // Type is number
const str = double('x'); // Type is string
function f(x) {
    return double(x);
    // ~ Argument of type 'string | number' is not assignable
    //   to parameter of type 'string'
}
export default {};
