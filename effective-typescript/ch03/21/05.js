function getComponent(vector, axis) {
    return vector[axis];
}
const x = 'x'; // type is "x"
let vec = { x: 10, y: 20, z: 30 };
getComponent(vec, x); // OK
export default {};
