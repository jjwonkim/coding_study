const o = { inner: { x: 0 } };
o.inner = { x: 1 };
// ~~~~ Cannot assign to 'inner' because it is a read-only property
o.inner.x = 1; // OK
// Type T = {
//   readonly inner: {
//     x: number;
//   };
// }
export default {};
