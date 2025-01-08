function double(x) {
    return x + x;
}
const num = double(12); // number
const str = double('x'); // string
// function f(x: string | number): string | number
function f(x) {
    return double(x);
}
export default {};
