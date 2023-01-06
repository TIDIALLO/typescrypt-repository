import { MatchData } from "./MatchData";
import { HtmlReport } from './ReportTargets/HtmlReport';
import { WinsAnalysis } from './Analyzers/WinsAnalysis';

export interface Analyzer {
    run(matchData: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    static winsAnalysisWithHtmlReport(team : string): Summary{
       return new Summary(
        new WinsAnalysis(team),
        new HtmlReport()
        );
    }

    constructor(
        public analyzer: Analyzer,
        public outputTarget: OutputTarget
    ) { }

    buildAndPrintReport(matchData: MatchData[]): void {
        const report = this.analyzer.run(matchData);
        this.outputTarget.print(report);
        console.log(report);
    }
}

