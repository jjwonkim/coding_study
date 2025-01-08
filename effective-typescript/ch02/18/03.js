function shouldUpdate(oldProps, newProps) {
    return (oldProps.xs !== newProps.xs ||
        oldProps.ys !== newProps.ys ||
        oldProps.xRange !== newProps.xRange ||
        oldProps.yRange !== newProps.yRange ||
        oldProps.color !== newProps.color
    // (no check for onClick)
    );
}
export default {};
