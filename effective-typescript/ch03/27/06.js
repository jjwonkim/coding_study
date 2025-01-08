// requires node modules: @types/lodash
const csvData = '...';
const rawRows = csvData.split('\n');
const headers = rawRows[0].split(',');
let allPlayers = [];
// ~~~~~~~~~~ Variable 'allPlayers' implicitly has type 'any[]'
//            in some locations where its type cannot be determined
for (const players of Object.values(rosters)) {
    allPlayers = allPlayers.concat(players);
    // ~~~~~~~~~~ Variable 'allPlayers' implicitly has an 'any[]' type
}
export default {};
