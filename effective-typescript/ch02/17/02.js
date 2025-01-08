function arraySum(arr) {
    let sum = 0, num;
    while ((num = arr.pop()) !== undefined) {
        sum += num;
    }
    return sum;
}
export default {};
