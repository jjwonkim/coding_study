function getUrlForPage(p) {
    return '';
}
async function changePage(state, newPage) {
    state.isLoading = true;
    try {
        const response = await fetch(getUrlForPage(newPage));
        if (!response.ok) {
            throw new Error(`Unable to load ${newPage}: ${response.statusText}`);
        }
        const text = await response.text();
        state.isLoading = false;
        state.pageText = text;
    }
    catch (e) {
        state.error = '' + e;
    }
}
export default {};
