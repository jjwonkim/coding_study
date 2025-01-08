// requires node modules: @types/lodash
const csvData = '...';
const rawRows = csvData.split('\n');
const headers = rawRows[0].split(',');
let allPlayers = [];
for (const players of Object.values(rosters)) {
    allPlayers = allPlayers.concat(players); // OK
}
export default {};
