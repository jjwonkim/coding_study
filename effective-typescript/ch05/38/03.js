function processBar(b) {
    /* ... */
}
function f1() {
    const x = expressionReturningFoo(); // Don't do this
    processBar(x);
}
function f2() {
    const x = expressionReturningFoo();
    processBar(x); // Prefer this
}
export default {};
