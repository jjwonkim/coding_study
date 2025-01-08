const Cylinder = (radius, height) => ({ radius, height });
function calculateVolume(shape) {
    if (shape instanceof Cylinder) {
        shape.radius;
        // ~~~~~~ Property 'radius' does not exist on type '{}'
    }
}
export default {};
