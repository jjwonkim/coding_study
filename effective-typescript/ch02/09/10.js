// tsConfig: {"strictNullChecks":false}
document.querySelector('#myButton').addEventListener('click', e => {
    e.currentTarget; // Type is EventTarget
    const button = e.currentTarget;
    button; // Type is HTMLButtonElement
});
export default {};
