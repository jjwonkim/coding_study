function getLengthBad(array) {
    // Don't do this!
    return array.length;
}
function getLength(array) {
    return array.length;
}
function hasTwelveLetterKey(o) {
    for (const key in o) {
        if (key.length === 12) {
            return true;
        }
    }
    return false;
}
export default {};
