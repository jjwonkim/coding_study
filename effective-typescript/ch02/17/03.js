function arraySum(arr) {
    let sum = 0, num;
    while ((num = arr.pop()) !== undefined) {
        // ~~~ 'pop' does not exist on type 'readonly number[]'
        sum += num;
    }
    return sum;
}
export default {};
