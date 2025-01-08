function getJSON(url) {
    return fetch(url).then(response => response.json());
}
function getJSONCallback(url, cb) {
    // ...
}
export default {};
