function pluck(record, key) {
    return record.map(r => r[key]);
}
pluck(albums, 'releaseDate'); // Type is Date[]
pluck(albums, 'artist'); // Type is string[]
pluck(albums, 'recordingType'); // Type is RecordingType[]
pluck(albums, 'recordingDate');
// ~~~~~~~~~~~~~~~ Argument of type '"recordingDate"' is not
//                 assignable to parameter of type ...
export default {};
