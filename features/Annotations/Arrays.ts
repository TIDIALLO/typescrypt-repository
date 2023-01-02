//declaration of an array
//let arrayName: type[]; exp
// let arrayName: string[];
// arrayName.push('.Net Engenier','software developper');

const carMakers = ['Ford', 'Toyota', 'Nissan'];
const date = [new Date(), new Date()];
//tableau a deux dimensions
const carByMaker = [
    ['f150'],
    ['corolla'],
    ["camaro"]
];


//help with inference when extracting value
const car = carMakers[0];
const myCar = carByMaker.pop(); //Removes the last element from an array and returns it.

//help with 'map'
carMakers.map(
   (car: string) : string =>{
    return car.toUpperCase();
   }
)

//========================================
//ultiples type in array
//flexible type
const importantDates: (Date | string)[] = [];
importantDates.push('2024-11-07');
importantDates.push(new Date());
