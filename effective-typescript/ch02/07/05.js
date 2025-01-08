// OK, {"A", "B"} is a subset of {"A", "B"}:
const ab = Math.random() < 0.5 ? 'A' : 'B';
const ab12 = ab; // OK, {"A", "B"} is a subset of {"A", "B", 12}
const back = twelve;
// ~~~~ Type 'AB12' is not assignable to type 'AB'
//        Type '12' is not assignable to type 'AB'
export default {};
