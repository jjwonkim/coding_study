function addKeyListener(el, fn) {
    el.addEventListener('keydown', e => {
        fn(e);
        // ~~~~~ The 'this' context of type 'void' is not assignable
        //       to method's 'this' of type 'HTMLElement'
    });
}
export default {};
