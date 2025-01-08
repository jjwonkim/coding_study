function getComponent(vector, axis) {
    return vector[axis];
}
const v = {
    x: 1,
};
v.x = 3; // OK
v.x = '3';
// ~ Type '"3"' is not assignable to type 'number'
v.y = 4;
// ~ Property 'y' does not exist on type '{ x: number; }'
v.name = 'Pythagoras';
// ~~~~ Property 'name' does not exist on type '{ x: number; }'
export default {};
