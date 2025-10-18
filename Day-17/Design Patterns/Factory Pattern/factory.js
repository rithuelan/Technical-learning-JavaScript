// 🏭 2️⃣ Factory Pattern
// 🧠 Concept:

// Used to create objects without specifying the exact class.
// The factory decides what object to create.


// factory.js
class Car {
  constructor() {
    this.type = "Car";
  }
}

class Truck {
  constructor() {
    this.type = "Truck";
  }
}

class VehicleFactory {
  createVehicle(vehicleType) {
    if (vehicleType === "car") return new Car();
    if (vehicleType === "truck") return new Truck();
  }
}

// Usage
const factory = new VehicleFactory();
const car = factory.createVehicle("car");
const truck = factory.createVehicle("truck");

console.log(car.type);   // Car
console.log(truck.type); // Truck


//run:
//node factory.js
