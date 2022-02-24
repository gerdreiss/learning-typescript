import { CsvFileReader } from './composition/CsvFileReader';
import { MatchReader } from './composition/MatchReader';
import { MatchResult } from './data/MatchData';

const reader = new MatchReader(new CsvFileReader('football.csv'));

let manUnitedWinsFP = reader
  .read()
  .filter(
    (match) =>
      (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
      (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
  ).length;

console.log(manUnitedWinsFP);
