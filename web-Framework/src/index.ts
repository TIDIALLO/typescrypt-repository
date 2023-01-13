import { User } from "./models/User";

const user = new User({ name: "Boo", age: 28 });

user.on('change', () => {console.log('change #1')});
user.on('change', () => {console.log('change #2')});
user.on('save', () => {console.log('triggered change')}); 

user.trigger('change');
user.trigger('change');