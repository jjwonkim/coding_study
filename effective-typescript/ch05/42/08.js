function parseYAML(yaml) {
    // ...
}
function safeParseYAML(yaml) {
    return parseYAML(yaml);
}
function processValue(val) {
    if (val instanceof Date) {
        val; // Type is Date
    }
}
export default {};
