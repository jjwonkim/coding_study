function processBar(b) {
    /* ... */
}
const config = {
    a: 1,
    b: 2,
    c: {
        key: value,
        // ~~~ Property ... missing in type 'Bar' but required in type 'Foo'
    },
};
export default {};
