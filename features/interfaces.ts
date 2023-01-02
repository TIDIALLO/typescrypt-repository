// function getFullName(person:{
//     firstName: string,
//     lastName: string
// }){
//     return `Firstname : ${person.firstName}, Lastname: ${person.lastName}`;
// }

// let person1 = {
//     firstName: "Abdou",
//     lastName: "Ba",
// }

// console.log(getFullName(person1))
interface Person {
    readonly phone: string;
    firstName: string;
    lastName: string;
    middleName?: string; //optional property
};

function getFullName(person: Person) {
    if (person.middleName) {
        return `Firstname : ${person.firstName}, Lastname: ${person.lastName}, MiddleName: ${person.middleName}`;
    }
    return `Firstname : ${person.firstName}, Lastname: ${person.lastName}`;
}

let Abdou = {
    phone: "fsdfs",
    firstName: "Abdou",
    lastName: "Ba",
}

let Samba = {
    phone: "fh",
    firstName: "Samba",
    lastName: "Diallo",
    middleName: "Bathie",
    age: 23
}
// let fullName = getFullName(Samba)
// console.log(getFullName(Abdou));
// console.log(fullName);
console.log(getFullName(Abdou));
console.log(getFullName(Samba));

//========================================================

// In addition to describing an object with properties,
// interfaces also allow you to describe function types.

interface StringFormat {
    (str: string, isUpper: boolean): string
}
let format: StringFormat;
format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLowerCase() : str.toUpperCase();
}

console.log(format("Diallo", true));

let UpperCase : StringFormat;
UpperCase = function(str: string){
    return str.toUpperCase();
}
console.log(UpperCase("tidiane",true));

//========================================================
        //Class Types
interface Json{
    toJSON():string;
}

