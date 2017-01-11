class Car {
    enginetype: number;

    constructor(engine: number) {
        this.enginetype = engine
    }

    start() {
        alert('engine started:' + this.enginetype);
    }

    stop() {
        alert('engine stopped:' + this.enginetype)
    }

}

window.onload = function () {
    var car = new Car(1000);
    car.start();
    car.stop();
};