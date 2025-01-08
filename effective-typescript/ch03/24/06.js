function isPointInPolygon(polygon, pt) {
    const box = polygon.bbox;
    if (box) {
        if (pt.x < box.x[0] || pt.x > box.x[1] || pt.y < box.y[1] || pt.y > box.y[1]) {
            // OK
            return false;
        }
    }
    // ...
}
export default {};
