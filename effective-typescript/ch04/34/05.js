const tests = [
    10,
    'red',
    true,
    // ~~~ Type 'true' is not assignable to type 'Expression3'
    ['+', 10, 5],
    ['case', ['>', 20, 10], 'red', 'blue', 'green'],
    ['**', 2, 31],
    // ~~~~~~~~~~~ Type '"**"' is not assignable to type 'FnName'
    ['rgb', 255, 128, 64],
];
export default {};
