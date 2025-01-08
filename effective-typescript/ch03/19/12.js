const app = null;
// END
// Don't do this:
app.get('/health', (request, response) => {
    response.send('OK');
});
// Do this:
app.get('/health', (request, response) => {
    response.send('OK');
});
export default {};
