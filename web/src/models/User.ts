import { Models } from "./Models";
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import {Eventing}   from "./Eventing";


export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Models<UserProps>{
    static buildUser(attrs: UserProps): User{
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        );
    }

    isAdminUser(): boolean{
        return this.get('id') === 1;
    }
}
