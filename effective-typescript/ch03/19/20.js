const cache = {};
function getQuote(ticker) {
    if (ticker in cache) {
        return cache[ticker];
        // ~~~~~~~~~~~~~ Type 'number' is not assignable to 'Promise<number>'
    }
    // COMPRESS
    return Promise.resolve(0);
    // END
}
export default {};
