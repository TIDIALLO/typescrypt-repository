let apples: number = 5;
let hasName: boolean = true;

let nothigMuch: null = null;
let nothing: undefined = undefined;

//built in object
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'blue', 'green', 'yellow'];
let myNumbers: number[] = [1, 2, 3]

//class
class Car {

}
let car1: Car = new Car();

//object litteral
let point: { x: number, y: number; } = {
    x: 12,
    y: 20
};

//Function
const logNumber: (x: number) => void = (x: number) => {
    console.log(x);
};

//when to use annotations
// ---1) Function that returns the any type
const json = '{"x":10, "y": 20}';
const coordonates: { x: number, y: number } = JSON.parse(json);
console.log("coordonates: ",coordonates); //{ x: 10, y: 20 }

// 2 when we declare a variable on one line 
// and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord = false;
for (let i = 0; i < words.length; i++) {
    if (words[i] === "green") {
        foundWord = true;
    }
    console.log(foundWord);
}

// 3 variable whose type can not be inferred  correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }

}