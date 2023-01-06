"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matchs) {
        let wins = 0;
        for (let match of matchs) {
            if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins += 1;
            }
            else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
                wins += 1;
            }
            ;
        }
        return `Team ${this.team} won ${wins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
