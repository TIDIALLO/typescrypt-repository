class ArrayOfNumbers {
    constructor(public collection: number[]) { }
    get(index: number): number {
        return this.collection[index];

    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) { }
    get(index: number): string {
        return this.collection[index];
    }
    set(index: number, value: string): void {
        this.collection[index] = value;
    }
}

//generic class
// on regroupe les deux classes en  une seule  classe
class ArrayOfAnything<T> {
    constructor(public collection: T[]) { }
    get(index: number): T {
        return this.collection[index];
    }
}
const arrayOfString = new ArrayOfAnything(['a', 'b', 'c']);
console.log(arrayOfString.get(0));

//generic function
function printString(array: string): void {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);    
    }
}

function printNumber(array: number[]): void {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

//using generic functions for regrouping the two functions
function print<T>(array: T[]) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

print<string>(['a', 'b', 'c']) //  == print(['a', 'b', 'c'])
//====================

class Car{
    print(){
        console.log("hello cars")
    }
}

class Truck{
    print(){
        console.log("hello trucks")
    }
}

interface Printable{
    print(): void;
}

function printCarOrTruck<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }    
}

printCarOrTruck([new Car(), new Car()]) //  == printCarOrTruck(['hello cars', ';

