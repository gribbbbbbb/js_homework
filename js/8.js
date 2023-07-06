let cars = new Map();
cars.set("car 1", "expensive");
cars.set("car 2", "cheap");
cars.set("car 3", "expensive");
cars.set("car 4", "expensive");
cars.set("car 5", "cheap");

for (let car of cars.keys()){
    console.log(car, "-", cars.get(car));
}