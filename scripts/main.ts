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

/**
 * example of arrow function, annotation, optional argument, interface
 * */

//interface
interface Person {
    fname: string,
    age: number
}

function info(person: Person) {
    return person.fname;
}

//arrow function || optional argument
var squareIt: (rect: {h: number; w?: number;}) => void;

squareIt = function (rect) {
    console.log('h: ', rect.h, 'w: ', rect.w)
};
window.onload = function () {
    // var car = new Car(1);
    // squareIt({h: 10});
    // car.stop();
    info({fname: 'bhushan', age: 25})
};
