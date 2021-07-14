
abstract class Vehicle {
    abstract wheel:number;

    start():void{

        console.log('brumm');

    }
}

class Toyota extends Vehicle{

   
    wheel=4;

}

let newToyota = new Toyota();

console.log(newToyota.wheel);
newToyota.start();

