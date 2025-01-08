function getStringLen(foo) {
    return foo.length;
}
getStringLen('hello'); // OK
getStringLen(new String('hello')); // OK
export default {};
