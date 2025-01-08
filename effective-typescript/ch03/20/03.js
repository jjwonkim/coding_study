function fetchProduct(id) { }
function fetchProductBySerialNumber(id) { }
let id = '12-34-56';
fetchProduct(id);
id = 123456; // OK
fetchProductBySerialNumber(id); // OK
export default {};
