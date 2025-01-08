function foo(abc) {
    let k;
    for (k in abc) {
        // let k: "a" | "b" | "c"
        const v = abc[k]; // Type is string | number
    }
}
export default {};
