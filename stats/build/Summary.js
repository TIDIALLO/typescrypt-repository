"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const HtmlReport_1 = require("./ReportTargets/HtmlReport");
const WinsAnalysis_1 = require("./Analyzers/WinsAnalysis");
class Summary {
    static winsAnalysisWithHtmlReport(team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    }
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matchData) {
        const report = this.analyzer.run(matchData);
        this.outputTarget.print(report);
        console.log(report);
    }
}
exports.Summary = Summary;
