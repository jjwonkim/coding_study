const dancingDuo = (x) => x;
const couple1 = dancingDuo([
    { first: 'Fred', last: 'Astaire' },
    { first: 'Ginger', last: 'Rogers' },
]);
const couple2 = dancingDuo([
    { first: 'Bono' },
    // ~~~~~~~~~~~~~~
    { first: 'Prince' },
    // ~~~~~~~~~~~~~~~~
    //     Property 'last' is missing in type
    //     '{ first: string; }' but required in type 'Name'
]);
export default {};
