function parseYAML(yaml) {
    // ...
}
function safeParseYAML(yaml) {
    return parseYAML(yaml);
}
const book = safeParseYAML(`
  name: Villette
  author: Charlotte Brontë
`);
alert(book.title);
// ~~~~~ Property 'title' does not exist on type 'Book'
book('read');
// ~~~~~~~~~ this expression is not callable
export default {};
