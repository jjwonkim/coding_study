// HIDE
function fetchURL(url, cb) {
    cb(url);
}
const url1 = '1';
const url2 = '2';
const url3 = '3';
// END
fetchURL(url1, function (response1) {
    fetchURL(url2, function (response2) {
        fetchURL(url3, function (response3) {
            // ...
            console.log(1);
        });
        console.log(2);
    });
    console.log(3);
});
console.log(4);
// Logs:
// 4
// 3
// 2
// 1
// Don't do this!
const _cache = {};
function fetchWithCache(url, callback) {
    if (url in _cache) {
        callback(_cache[url]);
    }
    else {
        fetchURL(url, text => {
            _cache[url] = text;
            callback(text);
        });
    }
}
let requestStatus;
function getUser(userId) {
    fetchWithCache(`/user/${userId}`, profile => {
        requestStatus = 'success';
    });
    requestStatus = 'loading';
}
export default {};
