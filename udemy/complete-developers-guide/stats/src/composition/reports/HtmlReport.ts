import fs from 'fs';
import { Output } from '../Summary';

export class HtmlReport implements Output {
  constructor(public filename: string) {}
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <p>${report}</p>
      </div> 
    `;
    fs.writeFileSync(this.filename, html);
  }
}
