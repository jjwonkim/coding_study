function logProduct(product) {
    const id = product.id;
    // ~~ Type 'string' is not assignable to type 'number'
    const name = product.name;
    const price = product.price;
    console.log(id, name, price);
}
const elmo = {
    name: 'Tickle Me Elmo',
    id: '048188 627152',
    price: 28.99,
};
export default {};
