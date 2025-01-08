const p = { first: 'Jane', last: 'Jacobs' };
//    -           --------------------------------- Values
//       ------ Type
function email(p, subject, body) {
    //     ----- -          -------          ----  Values
    //              ------           ------        ------   -------- Types
    // COMPRESS
    return new Response();
    // END
}
class Cylinder {
    radius = 1;
    height = 1;
}
function calculateVolume(shape) {
    if (shape instanceof Cylinder) {
        shape; // OK, type is Cylinder
        shape.radius; // OK, type is number
    }
}
// Type is (p: Person, subject: string, body: string) => Response
const v1 = typeof p; // Value is "object"
const v2 = typeof email; // Value is "function"
export default {};
