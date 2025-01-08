// requires node modules: @types/geojson
function helper(coordinates) { }
const { geometry } = f;
if (geometry) {
    if (geometry.type === 'GeometryCollection') {
        throw new Error('GeometryCollections are not supported.');
    }
    helper(geometry.coordinates); // OK
}
export default {};
