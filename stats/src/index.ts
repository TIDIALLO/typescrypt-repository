import { MatchResult } from "./MatchResult";
import {MatchReader} from "./MatchReader";


// const reader = new CsvFileReader('football.csv');
const reader = new MatchReader('football.csv');
reader.read();



let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins += 1;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins += 1;
    };
}
console.log(`Man United won ${manUnitedWins} games`);
console.log(reader.data.length);
console.log("Date of first match = "+reader.data[0]);

