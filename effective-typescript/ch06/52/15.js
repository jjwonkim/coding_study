const beatles = ['john', 'paul', 'george', 'ringo'];
map(beatles, function (name, // $ExpectType string
i, // $ExpectType number
array) {
    this; // $ExpectType string[]
    return name.length;
}); // $ExpectType number[]
export default {};
