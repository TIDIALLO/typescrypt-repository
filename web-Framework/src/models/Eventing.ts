type Callback = () => void;
export class Eventing {
    // Ceci va stocker les events (clés) et les fonctions de rappels (valeurs)
    events: { [Key: string]: Callback[] } = {};
    on = (eventName: string, callback: Callback): void =>{
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName];
        if (!handlers || handlers.length === 0) return;
            handlers.forEach(callback => {
            callback();
        });
    }   
}