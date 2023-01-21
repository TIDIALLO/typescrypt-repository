<<<<<<< HEAD
import { User } from "./models/User";
=======
>>>>>>> 2d4c35d6 (refactoring unsion composiont-inheritence & agregation)
import axios, {AxiosResponse} from 'axios';
axios.get('http://localhost:3000/users')
    .then((response: AxiosResponse) =>{
        console.log(response.data);
<<<<<<< HEAD
    });
const user =  User.buildUser({ id: 1, name: "John", age: 75});
user.on('change', () => {
    console.log(user);
})
user.save();
user.fetch();
=======
    });
>>>>>>> 2d4c35d6 (refactoring unsion composiont-inheritence & agregation)
