import { User } from "./models/User";

const user =  User.buildUser({ id: 1, name: "John", age: 75});
user.on('change', () => {
    console.log(user);
})
user.save();
user.fetch();
