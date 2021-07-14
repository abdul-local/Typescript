class Car {
    public name:string;

    constructor(name:string){

        this.name=name;
    }

    
}

let newCar = new Car('ferari');

console.log(newCar);
console.log(newCar.name);