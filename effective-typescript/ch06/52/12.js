// tsConfig: {"noImplicitAny":false}
const square = (x) => x * x;
function assertType(x) { }
const beatles = ['john', 'paul', 'george', 'ringo'];
assertType(map(beatles, function (name, i, array) {
    // ~~~~~~~ Argument of type '(name: any, i: any, array: any) => any' is
    //         not assignable to parameter of type '(u: string) => any'
    assertType(name);
    assertType(i);
    assertType(array);
    assertType(this);
    // ~~~~ 'this' implicitly has type 'any'
    return name.length;
}));
export default {};
