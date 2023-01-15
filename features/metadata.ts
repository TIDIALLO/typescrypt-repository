import 'reflect-metadata'

// const plane = {
//     color: 'red'
// }

// // Reflect.defineMetadata('note','hi there', plane)
// Reflect.defineMetadata('note',  'hi there', plane, 'color');
// console.log(note);const note =  Reflect.getMetadata('note', plane, 'color');
@printMetadata
class Plane{
    color: string = 'black';
    // @markFunction('Hi there')
    @get('/login')
    fly(): void{
        console.log('vrrrr')
    }
}


// function markFunction(target: Plane ,key: string): void{
//     Reflect.defineMetadata('secret', 123, target, key);
// }
//create decorator
function get(secretInfo: string){
    return function (target: Plane ,key: string): void{
        Reflect.defineMetadata('secret', secretInfo, target, key);
    }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);

function printMetadata(target: typeof Plane){
    for(let key in target.prototype){
        const secret = Reflect.getMetadata('secret', target.prototype, key);
        console.log(secret);
    }
}