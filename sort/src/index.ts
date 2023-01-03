import {Sorter}  from  './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollectoion';

const numbersCollection = new NumbersCollection([-2,0,1,3,4,16]);
const sorter = new Sorter(numbersCollection); // [-2,0,1,3,4,16]

// sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("gsdafgq");
const sorter2 = new Sorter(charactersCollection); // ["fdbDSaGG"]
//sorter2.sort();
console.log(charactersCollection.data);




