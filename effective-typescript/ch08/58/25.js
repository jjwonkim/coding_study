async function getJSON(url) {
    const response = await fetch(url);
    return response.json();
}
export default {};
