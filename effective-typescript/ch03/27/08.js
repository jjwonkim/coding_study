// requires node modules: @types/lodash
const csvData = '...';
const rawRows = csvData.split('\n');
const headers = rawRows[0].split(',');
const allPlayers = Object.values(rosters).flat();
// OK, type is BasketballPlayer[]
export default {};
