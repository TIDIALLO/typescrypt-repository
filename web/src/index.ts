import { User } from "./models/User";

const user = new User({});
user.set({ name: 'kou bax ', age: 24 });
user.save();


