import { MatchData } from '../data/MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reports/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface Output {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public output: Output) {}

  buildAndPrintReport(matches: MatchData[]): void {
    this.output.print(this.analyzer.run(matches));
  }

  static createHtmlWinsSummary(team: string, target: string) {
    return new Summary(new WinsAnalysis(team), new HtmlReport(target));
  }
}
