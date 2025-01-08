const firstLast = { first: 'Harry', last: 'Truman' };
function addOptional(a, b) {
    return { ...a, ...b };
}
const president = addOptional(firstLast, hasMiddle ? { middle: 'S' } : null);
president.middle; // OK, type is string | undefined
export default {};
