const meters = (m) => m;
const seconds = (s) => s;
const oneKm = meters(1000); // Type is Meters
const oneMin = seconds(60); // Type is Seconds
const tenKm = oneKm * 10; // Type is number
const v = oneKm / oneMin; // Type is number
export default {};
