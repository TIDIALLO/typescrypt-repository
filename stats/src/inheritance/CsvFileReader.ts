import fs from 'fs';


export abstract class CsvFileReader <T>{
    data: T[] = [];

    abstract mapRow(row: string[]): T;

    constructor(public filename: string) { }


    public read(): void {
        this.data = fs.readFileSync(this.filename, 'utf8')
            .split('\n')
            .map(
                (row: string) => {
                    return row.split(',');
                }
            ).map(this.mapRow)  
    }

}