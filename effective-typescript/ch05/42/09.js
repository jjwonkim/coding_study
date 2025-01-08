function parseYAML(yaml) {
    // ...
}
function safeParseYAML(yaml) {
    return parseYAML(yaml);
}
function isBook(val) {
    return typeof val === 'object' && val !== null && 'name' in val && 'author' in val;
}
function processValue(val) {
    if (isBook(val)) {
        val; // Type is Book
    }
}
export default {};
