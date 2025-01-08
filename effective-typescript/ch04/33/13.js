function pluck(record, key) {
    return record.map(r => r[key]);
}
const releaseDates = pluck(albums, 'releaseDate'); // Type is (string | Date)[]
export default {};
