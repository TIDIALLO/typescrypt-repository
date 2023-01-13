interface userProps {
    name?: string,
    age?: number
}

type Callback = () => void;

export class User {
    //ceci va stocker les events (clés) et les fonctions de rappels (valeurs)
    events: { [Key: string]: Callback[] } = {};

    constructor(private data: userProps) { };

    get(propName: string): (string | number) {
        return this.data[propName];
    }

    set(update: userProps): void {
        Object.assign(this.data, update);
    }

    on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName];
        
        if(!handlers || handlers.length===0) return;
        
        handlers.forEach(callback => {
            callback();
        });
    }
}