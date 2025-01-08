// Function getJSON(url: string): Promise<any>
async function getJSON(url) {
    const response = await fetch(url);
    const jsonPromise = response.json(); // Type is Promise<any>
    return jsonPromise;
}
export default {};
