function parseTaggedText(lines) {
    const currPara = [];
    const paragraphs = [];
    const addParagraph = () => {
        if (currPara.length) {
            paragraphs.push(currPara);
            currPara.length = 0; // Clear lines
            // ~~~~~~ Cannot assign to 'length' because it is a read-only
            // property
        }
    };
    for (const line of lines) {
        if (!line) {
            addParagraph();
        }
        else {
            currPara.push(line);
            // ~~~~ Property 'push' does not exist on type 'readonly string[]'
        }
    }
    addParagraph();
    return paragraphs;
}
export default {};
