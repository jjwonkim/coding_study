function focusOnFeature(f) {
    const bounds = calculateBoundingBox(f);
    const camera = viewportForBounds(bounds);
    setCamera(camera);
    const { center: { lat, lng }, zoom, } = camera;
    // ~~~      Property 'lat' does not exist on type ...
    //      ~~~ Property 'lng' does not exist on type ...
    zoom; // Type is number | undefined
    window.location.search = `?v=@${lat},${lng}z${zoom}`;
}
export default {};
