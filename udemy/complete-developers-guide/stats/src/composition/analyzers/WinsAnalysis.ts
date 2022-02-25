import { MatchData, MatchResult } from '../../data/MatchData';
import { Analyzer } from '../Summary';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = matches.filter(
      (match) =>
        (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
        (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
    ).length;

    return `${this.team} won ${wins} games.`;
  }
}
