import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollectoion'; 
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([12, 3, -5, 0, 25]);
numbersCollection.sort();
console.log(numbersCollection.data);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();

const charactersCollection = new CharactersCollection('Xaagtcyb');
// const sorter = new Sorter(charactersCollection);
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// const sorter = new Sorter(linkedList);
// sorter.sort();
linkedList.print();
