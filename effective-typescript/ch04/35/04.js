// requires node modules: @types/geojson
function calculateBoundingBox(f) {
    let box = null;
    const helper = (coords) => {
        // ...
    };
    const { geometry } = f;
    if (geometry) {
        helper(geometry.coordinates);
        // ~~~~~~~~~~~
        // Property 'coordinates' does not exist on type 'Geometry'
        //   Property 'coordinates' does not exist on type
        //   'GeometryCollection'
    }
    return box;
}
export default {};
