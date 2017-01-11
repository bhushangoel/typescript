var Car = (function () {
    function Car(engine) {
        this.enginetype = engine;
    }
    Car.prototype.start = function () {
        alert('engine started:' + this.enginetype);
    };
    Car.prototype.stop = function () {
        alert('engine stopped:' + this.enginetype);
    };
    return Car;
}());
window.onload = function () {
    var car = new Car(1000);
    car.start();
    car.stop();
};
