function isPointInPolygon(polygon, pt) {
    if (polygon.bbox) {
        if (pt.x < polygon.bbox.x[0] || pt.x > polygon.bbox.x[1] || pt.y < polygon.bbox.y[1] || pt.y > polygon.bbox.y[1]) {
            return false;
        }
    }
    // ... more complex check
}
export default {};
