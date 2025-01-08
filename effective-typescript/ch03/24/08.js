// HIDE
const polygon = { exterior: [], holes: [] };
function calculatePolygonBbox(polygon) { }
// END
const { bbox } = polygon;
if (!bbox) {
    calculatePolygonBbox(polygon); // Fills in polygon.bbox
    // Now polygon.bbox and bbox refer to different values!
}
export default {};
