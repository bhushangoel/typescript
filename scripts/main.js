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
function info(person) {
    return person.fname;
}
//arrow function || optional argument
var squareIt;
squareIt = function (rect) {
    console.log('h: ', rect.h, 'w: ', rect.w);
};
window.onload = function () {
    // var car = new Car(1);
    // squareIt({h: 10});
    // car.stop();
    info({ fname: 'bhushan', age: 25 });
};
