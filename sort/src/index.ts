import {Sorter}  from  './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([-2,0,1,3,4,16]);

const sorter = new Sorter(numbersCollection); // [-2,0,1,3,4,16]

sorter.sort();
console.log(sorter.collection.data);
console.log(numbersCollection.data);


