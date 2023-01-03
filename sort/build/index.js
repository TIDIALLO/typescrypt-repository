"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = i + 1; j < length; j++) {
                if (this.collection[i] > this.collection[j]) {
                    const temp = this.collection[i];
                    this.collection[i] = this.collection[j];
                    this.collection[j] = temp;
                }
            }
        }
    }
}
const sorter = new Sorter([1, -2, 3, 4, 0, 16]);
sorter.sort();
console.log(sorter.collection);
