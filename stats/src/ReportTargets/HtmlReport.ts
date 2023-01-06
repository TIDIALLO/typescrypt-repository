import fs from 'fs'
import { OutputTarget } from '../Summary';
export class HtmlReport implements OutputTarget{
    print(report: string): void {
        // const div = document.createElement("div");
        const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1
                ">
                <title>
                    ${report}
                </title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap
                /css/bootstrap.min.css">
                <link rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/
                7.9.0/styles/default.min.css">
            </head>
            <html lang="en">
                <body>                
                    <h1>Analysis Output </h1>
                    <div>${report}</div>
                </body>
            </html>
        `;

        fs.writeFileSync('report.html', html, { encoding: 'utf-8' });
    }
    
}