class Vechile {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    start(){
        return `${this.model}is a car from ${this.make}`;
    }
}
class Car extends Vechile {
    Drive ()
    {
        return `${this.make}: This is an inheritance example`;
    }
}
let myCar = new Car("toyota", "tata");
console.log(myCar.start());
console.log(myCar.drive());