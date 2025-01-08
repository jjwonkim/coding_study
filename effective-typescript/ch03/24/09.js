// HIDE
const polygon = { exterior: [], holes: [] };
function calculatePolygonBbox(polygon) { }
// END
const { bbox } = polygon;
if (!bbox) {
    calculatePolygonBbox(polygon); // Fills in polygon.bbox
    // Now polygon.bbox and bbox refer to different values!
}
function fn(p) {
    /* ... */
}
polygon.bbox; // Type is BoundingBox | undefined
if (polygon.bbox) {
    polygon.bbox; // Type is BoundingBox
    fn(polygon);
    polygon.bbox; // Type is still BoundingBox
}
export default {};
