const _cache = {};
async function fetchWithCache(url) {
    if (url in _cache) {
        return _cache[url];
    }
    const response = await fetch(url);
    const text = await response.text();
    _cache[url] = text;
    return text;
}
let requestStatus;
async function getUser(userId) {
    requestStatus = 'loading';
    const profile = await fetchWithCache(`/user/${userId}`);
    requestStatus = 'success';
}
export default {};
