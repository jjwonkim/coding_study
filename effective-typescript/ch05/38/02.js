function processBar(b) {
    /* ... */
}
function f() {
    const x = expressionReturningFoo();
    processBar(x);
    //         ~ Argument of type 'Foo' is not assignable to
    //           parameter of type 'Bar'
}
export default {};
