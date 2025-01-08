function shallowObjectEqual(a, b) {
    for (const [k, aVal] of Object.entries(a)) {
        if (!(k in b) || aVal !== b[k]) {
            return false;
        }
    }
    return Object.keys(a).length === Object.keys(b).length;
}
export default {};
