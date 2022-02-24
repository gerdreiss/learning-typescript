import { dateStringToDate } from './utils';
import { MatchData, MatchResult } from './MatchData';

interface DataReader {
  read(): string[][];
}

export class MatchReader {
  constructor(public reader: DataReader) {}

  read(): MatchData[] {
    return this.reader
      .read()
      .map((row) => [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ]);
  }
}
