// requires node modules: @types/geojson
function helper(coordinates) { }
const geometryHelper = (g) => {
    if (geometry.type === 'GeometryCollection') {
        geometry.geometries.forEach(geometryHelper);
    }
    else {
        helper(geometry.coordinates); // OK
    }
};
const { geometry } = f;
if (geometry) {
    geometryHelper(geometry);
}
export default {};
