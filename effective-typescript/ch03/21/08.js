function getComponent(vector, axis) {
    return vector[axis];
}
const v1 = {
    x: 1,
    y: 2,
}; // Type is { x: number; y: number; }
const v2 = {
    x: 1,
    y: 2,
}; // Type is { x: 1; y: number; }
const v3 = {
    x: 1,
    y: 2,
}; // Type is { readonly x: 1; readonly y: 2; }
export default {};
