function turnLightOn() { }
function turnLightOff() { }
function setLightSwitch(value) {
    switch (value) {
        case true:
            turnLightOn();
            break;
        case false:
            turnLightOff();
            break;
        default:
            console.log(`I'm afraid I can't do that.`);
    }
}
async function setLight() {
    const response = await fetch('/light');
    const result = await response.json();
    setLightSwitch(result.lightSwitchValue);
}
export default {};
