// interface Vehicule {
//     name: string,
//     year: Date,
//     isBroken: boolean,
//     summary(): string ;
// }
interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    isBroken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const drink = {
    color: 'brown',
    corbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
}

// const printVehicule = (vehicule:{name: string, year: number, isBroken:boolean}): void => {
//     console.log(`Name : ${vehicule.name}`);
//     console.log(`yeah : ${vehicule.year}`);
//     console.log(`breaken : ${vehicule.isBroken}`);
// }

///with interface
// const printVehicule = (vehicule: Vehicule): void => {
//     console.log(vehicule.summary());
// }
const printSummary = (item: Reportable): void => {
    console.log(item.summary());
}
printSummary(oldCivic);
printSummary(drink);
