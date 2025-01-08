function addKeyListener(el, fn) {
    el.addEventListener('keydown', e => {
        fn(el, e);
        // ~ Expected 1 arguments, but got 2
    });
}
export default {};
