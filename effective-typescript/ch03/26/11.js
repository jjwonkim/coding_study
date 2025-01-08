function callWithRandomNumbers(fn) {
    fn(Math.random(), Math.random());
}
callWithRandomNumbers((a, b) => {
    a; // Type is number
    b; // Type is number
    console.log(a + b);
});
export default {};
