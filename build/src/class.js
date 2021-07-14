"use strict";
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    return Car;
}());
var newCar = new Car('ferari');
console.log(newCar);
console.log(newCar.name);
