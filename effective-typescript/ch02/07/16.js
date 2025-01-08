function sortBy(vals, key) {
    // COMPRESS
    vals.sort((a, b) => (a[key] === b[key] ? 0 : a[key] < b[key] ? -1 : +1));
    return vals;
    // END
}
const pts = [
    { x: 1, y: 1 },
    { x: 2, y: 0 },
];
sortBy(pts, 'x'); // OK, 'x' extends 'x'|'y' (aka keyof T)
sortBy(pts, 'y'); // OK, 'y' extends 'x'|'y'
sortBy(pts, Math.random() < 0.5 ? 'x' : 'y'); // OK, 'x'|'y' extends 'x'|'y'
sortBy(pts, 'z');
// ~~~ Type '"z"' is not assignable to parameter of type '"x" | "y"
export default {};
