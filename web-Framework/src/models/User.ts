<<<<<<< HEAD
<<<<<<< HEAD
import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
=======
import { Eventing } from './Eventing';
import { Sync } from './Sync';

>>>>>>> e649b176 (Refactoring sync)
=======
import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
>>>>>>> c7cd8879 (shortned passthroght metho)
export interface UserProps {
    id?: number,
    name?: string,
    age?: number
}

const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(
            new  Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        );
    }
    export class User {
    public events:Eventing  = new Eventing()
    constructor(private data: UserProps) { };

    get(propName: string): (string | number){
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
    }

>>>>>>> e649b176 (Refactoring sync)
=======
    }
>>>>>>> c7cd8879 (shortned passthroght metho)
}