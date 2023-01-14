import { User } from "./models/User";

const user = new User({name:"new reord", age:20});
// user.save();
user.events.on('change',() =>{
    console.log("change!!!");
});

user.events.trigger('change');