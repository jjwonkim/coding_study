function callWithRandomNumbers(fn) {
    fn(Math.random(), Math.random());
}
const fn = (a, b) => {
    // ~    Parameter 'a' implicitly has an 'any' type
    //    ~ Parameter 'b' implicitly has an 'any' type
    console.log(a + b);
};
callWithRandomNumbers(fn);
export default {};
