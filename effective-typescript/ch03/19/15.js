function logProduct(product) {
    const id = product.id;
    // ~~ Type 'string' is not assignable to type 'number'
    const name = product.name;
    const price = product.price;
    console.log(id, name, price);
}
const furby = {
    name: 'Furby',
    id: 630509430963,
    // ~~ Type 'number' is not assignable to type 'string'
    price: 35,
};
logProduct(furby);
export default {};
