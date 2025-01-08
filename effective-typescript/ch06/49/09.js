function addKeyListener(el, fn) {
    el.addEventListener('keydown', e => {
        fn.call(el, e);
    });
}
export default {};
