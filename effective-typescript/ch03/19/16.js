function getQuote(ticker) {
    return fetch(`https://quotes.example.com/?q=${ticker}`).then(response => response.json());
}
export default {};
