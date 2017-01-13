class Engine {
    abc: string;
    constructor(public horsePower: number, public engineType: string) {
        this.abc = this.horsePower + " " + this.engineType;
    }
}

class Car {
    private _engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;      //?
    }

    get engine(): Engine {
        return this._engine;
    }

    set engine(value: Engine) {
        this._engine = value;
    }

    start() {
        console.log('engine started ', this._engine.engineType)
    }
}

window.onload = function () {
    var engine = new Engine(300, 'v8');
    console.log('engine: ', engine)
    var car = new Car(engine);
    car.start();
}