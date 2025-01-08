const tests = [
    10,
    'red',
    true,
    // ~~~ Type 'true' is not assignable to type 'Expression4'
    ['+', 10, 5],
    ['case', ['>', 20, 10], 'red', 'blue', 'green'],
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //  Type '["case", [">", ...], ...]' is not assignable to type 'string'
    ['**', 2, 31],
    // ~~~~~~~~~~~~ Type '["**", number, number]' is not assignable to type 'string
    ['rgb', 255, 128, 64],
    ['rgb', 255, 128, 64, 73],
    // ~~~~~~~~~~~~~~~~~~~~~~~~ Type '["rgb", number, number, number, number]'
    //                          is not assignable to type 'string'
];
const okExpressions = [
    ['-', 12],
    // ~~~~~~~~~ Type '["-", number]' is not assignable to type 'string'
    ['+', 1, 2, 3],
    // ~~~~~~~~~~~~~~ Type '["+", number, ...]' is not assignable to type 'string'
    ['*', 2, 3, 4],
    // ~~~~~~~~~~~~~~ Type '["*", number, ...]' is not assignable to type 'string'
];
export default {};
