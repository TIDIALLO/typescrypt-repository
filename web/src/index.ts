import { on } from "events";
import { User } from "./models/User";

// const user = new User({ name: 'new record', age: 25 });

// console.log(user.get('name'));

// user.on('change', () => {
//     console.log('User was changed, we probaly need to update some HTML attributes ');
// });

// user.set({ name: 'new name' });  

const user = new User({id:1});

user.on('change', () => {
    console.log(user);
     
});

user.fetch()