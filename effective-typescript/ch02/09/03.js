const alice = {
    name: 'Alice',
    occupation: 'TypeScript developer',
    // ~~~~~~~~~ Object literal may only specify known properties
    //           and 'occupation' does not exist in type 'Person'
};
const bob = {
    name: 'Bob',
    occupation: 'JavaScript developer',
}; // No error
export default {};
