const xs = [1, 2, 3];
function checkedAccess(xs, i) {
    if (i < xs.length) {
        return xs[i];
    }
    throw new Error(`Attempt to access ${i} which is past end of array.`);
}
export default {};
