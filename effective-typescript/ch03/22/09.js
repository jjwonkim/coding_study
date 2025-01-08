function isInputElement(el) {
    return 'value' in el;
}
function getElementContent(el) {
    if (isInputElement(el)) {
        el; // Type is HTMLInputElement
        return el.value;
    }
    el; // Type is HTMLElement
    return el.textContent;
}
export default {};
