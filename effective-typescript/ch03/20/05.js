function fetchProduct(id) { }
function fetchProductBySerialNumber(id) { }
const id = '12-34-56';
fetchProduct(id);
{
    const id = 123456; // OK
    fetchProductBySerialNumber(id); // OK
}
export default {};
