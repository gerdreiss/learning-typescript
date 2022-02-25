import { Output } from '../Summary';

export class ConsoleReport implements Output {
  print(report: string): void {
    console.log(report);
  }
}
