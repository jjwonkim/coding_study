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
    price: 35,
};
logProduct(furby);
// ~~~~~ Argument .. is not assignable to parameter of type 'Product'
//         Types of property 'id' are incompatible
//         Type 'number' is not assignable to type 'string'
export default {};
