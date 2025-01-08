function pluck(record, key) {
    return record.map(r => r[key]);
    // ~~~~~~ Element implicitly has an 'any' type
    //        because type '{}' has no index signature
}
export default {};
