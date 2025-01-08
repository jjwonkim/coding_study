const REQUIRES_UPDATE = {
    xs: true,
    ys: true,
    xRange: true,
    yRange: true,
    color: true,
    onClick: false,
};
function shouldUpdate(oldProps, newProps) {
    let k;
    for (k in oldProps) {
        if (oldProps[k] !== newProps[k] && REQUIRES_UPDATE[k]) {
            return true;
        }
    }
    return false;
}
export default {};
