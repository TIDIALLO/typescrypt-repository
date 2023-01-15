import { User } from "./models/User";
import axios, {AxiosResponse} from 'axios';
axios.get('http://localhost:3000/users')
    .then((response: AxiosResponse) =>{
        console.log(response.data);
    });
const user =  User.buildUser({ id: 1, name: "John", age: 75});
user.on('change', () => {
    console.log(user);
})
user.save();
user.fetch();
