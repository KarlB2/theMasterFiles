// Write a class to describe a Car
// A car should have a color, a make, a model, and a year. 
// There should be a method to return the details of the car
// There should be a method to change the color of the car.

class Car {
    constructor(make, model, year, color) {
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year
    }
    details() {
        return { year: this.year, make: this.make, model: this.model, color: this.color }
    }
    repaint(newColor) {
        this.color = newColor
    }
}

////////////////////// Test Case ////////////////////////////
///////////////// No need to modify below ///////////////////

const car1 = new Car("Toyota", "Corolla", 2020, "blue");

const carDetails = car1.details();
console.log(carDetails); // should output car details
car1.repaint('green');
const updatedDetails = car1.details();
console.log(updatedDetails); // should output car details with color green