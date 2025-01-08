function shouldUpdate(oldProps, newProps) {
    let k;
    for (k in oldProps) {
        if (oldProps[k] !== newProps[k]) {
            if (k !== 'onClick')
                return true;
        }
    }
    return false;
}
export default {};
