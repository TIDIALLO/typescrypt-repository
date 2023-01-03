"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollectoion_1 = require("./CharactersCollectoion");
const numbersCollection = new NumbersCollection_1.NumbersCollection([-2, 0, 1, 3, 4, 16]);
const sorter = new Sorter_1.Sorter(numbersCollection); // [-2,0,1,3,4,16]
// sorter.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollectoion_1.CharactersCollection("gsdafgq");
const sorter2 = new Sorter_1.Sorter(charactersCollection); // ["fdbDSaGG"]
//sorter2.sort();
console.log(charactersCollection.data);
