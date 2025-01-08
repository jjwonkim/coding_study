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
            console.log(key, o[key]);
            //  ~~~~~~ Element implicitly has an 'any' type
            //         because type '{}' has no index signature
            return true;
        }
    }
    return false;
}
export default {};
