function renderPage(state) {
    if (state.error) {
        return `Error! Unable to load ${currentPage}: ${state.error}`;
    }
    else if (state.isLoading) {
        return `Loading ${currentPage}...`;
    }
    return `<h1>${currentPage}</h1>\n${state.pageText}`;
}
export default {};
