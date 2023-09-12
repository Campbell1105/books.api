class Animal {
    constructor (name, furry, fourLegs, poisonous) {
    this.name = name;
    this.furry = furry;
    this.fourlegs = fourLegs;
    this.relatedTo = relatedTo
    }
    addRelatedTo()
}



class Vehicle {
    constructor (numberOfWheels, horsePower) {
        this.numberOfWheels = numberOfWheels;
        this.horsePower = horsePower;
    }
    requiresDriver() {
        console.log ('yes')
    }
}

class Car extends Vehicle {
    constructor(numberOfWheels, horsePower, fuelType, numberOfDoors) {
        super (numberOfWheels, horsePower)
        this.fuelType = fuelType
        this.numberOfDoors = numberOfDoors
    }
    roadLegal() {
        console.log ('yes')
    }
}

const acord = new Car (4, 275, 'gasoline', 4)




to  Everyone - Sent from Class




class Vehicle {
    constructor(make, model, color) {
    this.make = make
    this.model = model
    this.color = color
    }

    changeSpeed(speed) {
        this.speed =speed
    }

}

class Ford extends Vehicle {
    constructor(make, model, color, year) {
        super(make, model, color)
        this.year = year
        this. averagePrice = []
    }
    addAveragePrice(number) {
    this.averagePrice.push(number)
    }

}

const Focus = new Ford ('Ford', 'Focus', 'Silver', 2014)
console.log(Focus)
Focus.addAveragePrice(20000)
console.log(Focus)

Leon Fennell  to  Everyone 8:11 PM
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
     displayVehicleInformation () {
         console.log (`Model: ${this.model}, Vehicle Make: ${this.make}, Year: ${this.year}
         `)
     }
}

class Car extends Vehicle {
    constructor(make, model, year, color, num_doors) {
        super(make, model, year)
        this.color = color;
        this.speed = 0;
    }
    accelerate () {
        this.speed += 10;
        
    }
    brake () {
        this.speed = 0;
    }
    speedometer() {
        console.log('Current speed: ' + speed + 'mph');
    }
}

const car = new Car('Ford',"Mustang",2019,'Blue',4);

car.displayVehicleInformation()

Nicholas A  to  Everyone 8:37 PM
class Vehicle {
    constructor(make, model, color) {
        this.make = make
        this.model = model
        this.color = color
        this.speed = 0
    }

    changeSpeed(speed) {
        this.speed = speed
    }
}

class Car extends Vehicle {
    constructor(make, model, color, year, price) {
        super(make, model, color)
        this.year = year
        this.price = price
    }
}

class Dealership {
    constructor() {
        this.carInventory = []
    }

    addToCarInventory(car) {
        this.carInventory.push(car)
    }

    calculateAverageCarPrice() {
        const totalPrice = this.carInventory.reduce((a, b) => {
            return a + b.price
        }, 0)
        return totalPrice / this.carInventory.length
    }
}

Nicholas A 8:37 PM
const myDealership = new Dealership()

const focus = new Car('Ford', 'Focus', 'Silver', 2014, 15000)
const elantra = new Car('Hyundai', 'Elantra', 'Blue', 2017, 18000)

myDealership.addToCarInventory(focus)
myDealership.addToCarInventory(elantra)

const averagePriceOfMyCars = myDealership.calculateAverageCarPrice()
console.log(averagePriceOfMyCars)

const mustang = new Car('Ford', 'Mustang', 'red', 2004, 20000)
myDealership.addToCarInventory(mustang)
const newAveragePrice = myDealership.calculateAverageCarPrice()
console.log(newAveragePrice)

// console.log(myDealership)