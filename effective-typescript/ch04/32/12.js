function eulogize(p) {
    if ('placeOfBirth' in p) {
        p; // Type is PersonWithBirth
        const { dateOfBirth } = p; // OK, type is Date
    }
}
export default {};
