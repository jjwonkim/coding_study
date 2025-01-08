function range(start, limit) {
    const out = [];
    for (let i = start; i < limit; i++) {
        out.push(i);
    }
    return out; // Return type inferred as number[]
}
export default {};
