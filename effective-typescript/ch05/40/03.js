function cacheLast(fn) {
    let lastArgs = null;
    let lastResult;
    return function (...args) {
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~
        //          Type '(...args: any[]) => any' is not assignable to type 'T'
        if (!lastArgs || !shallowEqual(lastArgs, args)) {
            lastResult = fn(...args);
            lastArgs = args;
        }
        return lastResult;
    };
}
export default {};
