class C {
    foo;
    constructor(foo) {
        this.foo = foo;
    }
}
const c = new C('instance of C');
const d = { foo: 'object literal' }; // OK!
export default {};
