function parseYAML(yaml) {
    // ...
}
function safeParseYAML(yaml) {
    return parseYAML(yaml);
}
const book = safeParseYAML(`
  name: The Tenant of Wildfell Hall
  author: Anne Brontë
`);
alert(book.title);
// ~~~~ Object is of type 'unknown'
book('read');
// ~~~~~~~~~~ Object is of type 'unknown'
export default {};
