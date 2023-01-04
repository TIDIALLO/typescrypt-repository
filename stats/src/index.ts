import fs from 'fs';

const matches = fs.readFileSync('football.csv', 'utf8').split('\n').map(
    (row: string) => {
        return row.split(',');
    }
);
// console.log(matches);
// const homeWin = 'H';
// const AwayWin = 'A';
// const MatchResult = {
//     HomeWin: 'H',
//     AwayWin: 'A',
//     Draw: 'D'
// };
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins += 1;
    }
    else if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins += 1;
    }
};

console.log(`Man United won ${manUnitedWins} games`);
