import { WinsAnalysis } from './composition/analyzers/WinsAnalysis';
import { CsvFileReader } from './composition/CsvFileReader';
import { MatchReader } from './composition/MatchReader';
import { HtmlReport } from './composition/reports/HtmlReport';
import { Summary } from './composition/Summary';

const csvReader = new CsvFileReader('football.csv');
const reader = new MatchReader(csvReader);
const analyzer = new WinsAnalysis('Man United');
const output = new HtmlReport('report.html');
const summary = new Summary(analyzer, output);

summary.buildAndPrintReport(reader.read());
// using static instance builder
Summary.createHtmlWinsSummary(
  'Man United',
  'static-report.html'
).buildAndPrintReport(reader.read());
