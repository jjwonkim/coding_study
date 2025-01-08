// tsConfig: {"noImplicitAny":false,"strictNullChecks":false}
// HIDE
class Chart {
    indices;
    // END
    getRanges() {
        for (const r of this.indices) {
            const low = r[0]; // Type is any
            const high = r[1]; // Type is any
            // ...
        }
    }
}
// END
export default {};
