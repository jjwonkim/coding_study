function handleDrag(eDown) {
    const targetEl = eDown.currentTarget;
    targetEl.classList.add('dragging');
    // ~~~~~~~           Object is possibly 'null'
    //         ~~~~~~~~~ Property 'classList' does not exist on type 'EventTarget'
    // ...
}
export default {};
