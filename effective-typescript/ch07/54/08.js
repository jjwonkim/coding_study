function foo(abc) {
    for (const [k, v] of Object.entries(abc)) {
        k; // Type is string
        v; // Type is any
    }
}
export default {};
