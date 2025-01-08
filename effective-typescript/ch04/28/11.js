function getUrlForPage(p) {
    return '';
}
function getStickSetting(controls) {
    const { leftSideStick, rightSideStick } = controls;
    if (leftSideStick === 0) {
        return rightSideStick;
    }
    else if (rightSideStick === 0) {
        return leftSideStick;
    }
    // ???
}
export default {};
