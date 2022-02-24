import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchData';
import { MatchReader } from './MatchReader';

const reader = new MatchReader(new CsvFileReader('football.csv'));

let manUnitedWinsFP = reader
  .read()
  .filter(
    (match) =>
      (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
      (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
  ).length;

console.log(manUnitedWinsFP);
