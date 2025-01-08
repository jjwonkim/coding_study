function focusOnFeature(f) {
    const bounds = calculateBoundingBox(f);
    const camera = viewportForBounds(bounds);
    setCamera(camera);
    const { center: { lat, lng }, zoom, } = camera; // OK
    zoom; // Type is number
    window.location.search = `?v=@${lat},${lng}z${zoom}`;
}
export default {};
