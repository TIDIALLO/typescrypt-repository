import { on } from "events";
import { User } from "./models/User";
import axios, { AxiosResponse } from 'axios';
import { Collection } from "./models/Collection";

// const user = new User({ name: 'new record', age: 25 });

// console.log(user.get('name'));

// user.on('change', () => {
//     console.log('User was changed, we probaly need to update some HTML attributes ');
// });

// user.set({ name: 'new name' });  

// const user = new User({id:1});

// user.on('change', () => {
//     console.log(user);

// });

// user.fetch()

// axios.get('http://localhost:3000/users')
//     .then((response: AxiosResponse)  => {
//         console.log(response.data);
//     });

const collection = new Collection('http://localhost:3000/users')

collection.on('change', () => {
    console.log('collection', collection);
});

collection.fetch();