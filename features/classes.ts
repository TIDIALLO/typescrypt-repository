class Vehicule {
    // color:string;

    constructor(public color: string) {
        this.color = color;
    }

    drive(): void {
        console.log('vounn vounn');
    }

    private honk(): void {
        console.log('piip');
    }
}

// const moto = new Vehicule();
// moto.drive();
// moto.honk();

//heritage
class Cars extends Vehicule {
    constructor(public wheels: number, color: string) {
        super(color);
    };

    drive(): void {
        console.log('vrooum');
    }
    startDriving(): void {
        this.drive();
    }
}
const car0 = new Cars(4,'black');
car0.startDriving();
// console.log(car0.color);