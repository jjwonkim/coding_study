function logProduct(product) {
    const id = product.id;
    // ~~ Type 'string' is not assignable to type 'number'
    const name = product.name;
    const price = product.price;
    console.log(id, name, price);
}
export default {};
