const obj = {
    one: 'uno',
    two: 'dos',
    three: 'tres',
};
for (const k in obj) {
    const v = obj[k];
    // ~~~~~~ Element implicitly has an 'any' type
    //        because type ... has no index signature
}
function foo(abc) {
    for (const k in abc) {
        // const k: string
        const v = abc[k];
        // ~~~~~~ Element implicitly has an 'any' type
        //        because type 'ABC' has no index signature
    }
}
const x = { a: 'a', b: 'b', c: 2, d: new Date() };
foo(x); // OK
export default {};
