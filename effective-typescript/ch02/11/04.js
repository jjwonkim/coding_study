function setDarkMode() { }
function createWindow(options) {
    if (options.darkMode) {
        setDarkMode();
    }
    // ...
}
createWindow({
    title: 'Spider Solitaire',
    darkmode: true,
    // ~~~~~~~~~~~~~ Object literal may only specify known properties, but
    //               'darkmode' does not exist in type 'Options'.
    //               Did you mean to write 'darkMode'?
});
export default {};
