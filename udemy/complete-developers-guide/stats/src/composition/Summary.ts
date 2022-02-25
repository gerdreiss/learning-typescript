import { MatchData } from '../data/MatchData';

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
}
