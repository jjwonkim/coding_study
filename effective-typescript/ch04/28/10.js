function getUrlForPage(p) {
    return '';
}
function getStickSetting(controls) {
    const { leftSideStick, rightSideStick } = controls;
    if (leftSideStick === 0) {
        return rightSideStick;
    }
    return leftSideStick;
}
export default {};
