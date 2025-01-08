function getLengthBad(array) {
    // Don't do this!
    return array.length;
}
function getLength(array) {
    return array.length;
}
getLengthBad(/123/); // No error, returns undefined
getLength(/123/);
// ~~~~~ Argument of type 'RegExp' is not assignable
//       to parameter of type 'any[]'
export default {};
