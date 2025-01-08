function extent(nums) {
    let result = null;
    for (const num of nums) {
        if (!result) {
            result = [num, num];
        }
        else {
            result = [Math.min(num, result[0]), Math.max(num, result[1])];
        }
    }
    return result;
}
const [min, max] = extent([0, 1, 2]);
const span = max - min; // OK
export default {};
