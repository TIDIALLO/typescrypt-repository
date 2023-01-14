import 'reflect-metadata'

// const plane = {
//     color: 'red'
// }

// // Reflect.defineMetadata('note','hi there', plane)
// Reflect.defineMetadata('note',  'hi there', plane, 'color');
// console.log(note);const note =  Reflect.getMetadata('note', plane, 'color');
class Plane{
    color: string = 'black';
    @markFunction
    fly(): void{
        console.log('vrrrr')
    }
}


function markFunction(target: Plane ,key: string): void{
    Reflect.defineMetadata('secret', 123, target, key);
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);