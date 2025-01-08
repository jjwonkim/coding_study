function callWithRandomNumbers(fn) {
    fn(Math.random(), Math.random());
}
const fn = (a, b) => {
    console.log(a + b);
};
callWithRandomNumbers(fn);
export default {};
