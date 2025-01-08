function processBar(b) {
    /* ... */
}
function f1() {
    const x = expressionReturningFoo();
    processBar(x);
    return x;
}
function g() {
    const foo = f1(); // Type is any
    foo.fooMethod(); // This call is unchecked!
}
export default {};
