const drivers = [
  { name: "itzhak", bus: 8292012 },
  { name: "moshe", bus: 1232012 },
  { name: "elazar", bus: 8292012 },
  { name: "itzhak", bus: 8292011 },
  { name: "david", bus: 8292011 },
  { name: "david", bus: 8292012 },
  { name: "elazar", bus: 6582012 },
  { name: "elaza", bus: 65820132 },
  { name: "elaza", bus: 65820412 },
  { name: "elaz", bus: 65820412 },
  { name: "ela", bus: 65825012 },
  { name: "eliazar", bus: 65826012 },
];

const generateBusToDrivers = (users) => {
  let myDict = {};
  users.forEach((item) => {
    // myDict[item.bus] && myDict[item.bus].push(item.name);
    // myDict[item.bus] ?? (myDict[item.bus] = [item.name]);
    myDict[item.bus]
      ? myDict[item.bus].push(item.name)
      : (myDict[item.bus] = [item.name]);
  });
  return myDict;
};
// console.log(generateBusToDrivers(drivers));

const generateDriverToAmountShows = (users) => {
  let myDict = {};
  users.forEach((item) => {
    // myDict[item.name] && (myDict[item.name] += 1);
    // myDict[item.name] ?? (myDict[item.name] = 1);
    myDict[item.name] ? (myDict[item.name] += 1) : (myDict[item.name] = 1);
  });

  return myDict;
};
// console.log(generateDriverToAmountShows(drivers));

const busToDrivers = generateBusToDrivers(drivers);
const driverToAmountShows = generateDriverToAmountShows(drivers);
console.log(driverToAmountShows);

const sortedDrivers = Object.keys(
  Object.fromEntries(
    Object.entries(driverToAmountShows).sort((a, b) => b[1] - a[1])
  )
);

console.log(sortedDrivers);

let myDrivers = new Set();
// console.log(busToDrivers);
Object.values(busToDrivers).forEach((drivers) => {
  // console.log(drivers);
  if (drivers.length === 1) {
    myDrivers.add(drivers[0]);
  } else {
    for (const sortedDriver of sortedDrivers) {
      if (drivers.includes(sortedDriver)) {
        myDrivers.add(sortedDriver);
        break;
      }
    }
  }
});

console.log(Array.from(myDrivers));

//////////////////////////////////////////////////////////

// class Car {
//   constructor(Id, palet) {
//     this.palet = palet;
//     this.Id = Id;
//   }
// }

// class Driver {
//   constructor(Id, name) {
//     this.name = name;
//     this.Id = Id;
//   }
// }

// class CarDriver {
//   constructor(Id, Car, Driver) {
//     this.car = Car;
//     this.Id = Id;
//     this.Driver = Driver;
//   }
// }

// const c1 = new Car(1, "12");
// const c2 = new Car(2, "123");
// const c3 = new Car(3, "1234");
// const c4 = new Car(4, "123455");
// const c5 = new Car(5, "123477");
// let arrcar2 = [c1.palet, c2.palet, c3.palet, c4.palet, c5.palet];
// const d2 = new Driver(2, "gh");
// const d1 = new Driver(1, "Shlomo");
// const d3 = new Driver(3, "Sherr");

// let c = new CarDriver(2, { ...c1 }, { ...d2 });
// let d = new CarDriver(4, { ...c2 }, { ...d2 });
// let a = new CarDriver(1, { ...c1 }, { ...d1 });

// let b = new CarDriver(3, { ...c1 }, { ...d3 });

// let e = new CarDriver(5, { ...c2 }, { ...d3 });

// let f = new CarDriver(6, { ...c3 }, { ...d3 });
// let g = new CarDriver(7, { ...c4 }, { ...d3 });

// let h = new CarDriver(8, { ...c5 }, { ...d2 });
// let LcarAndDrivers = [
//   { ...a },
//   { ...b },
//   { ...c },
//   { ...e },
//   { ...f },
//   { ...g },
//   { ...d },
//   { ...h },
// ];
// // console.log(LcarAndDrivers);
// let arrCar = [];
// let arrDriver = [];
// let cuntor = 0;
// for (let i = 0; i < LcarAndDrivers.length; i++) {
//   // let car = arrCar.findIndex((c) => c === LcarAndDrivers[i].car.palet);
//   // let car2 = arrcar2.findIndex((c) => c !== LcarAndDrivers[i].car.palet);
//   // console.log(car);

//   arrCar.push(LcarAndDrivers[i].car.palet);
//   arrDriver.push(LcarAndDrivers[i].Driver.name);
//   // console.log(arrCar);
//   // console.log(arrDriver);
// }
// // console.log(arrCar);
// // console.log(arrcar2);
// console.log(arrDriver);

// const miro = "whats up?!!!";

const CompLogic = () => {
  // const sum = 5 * 6;
  // console.log(sum);
  // console.log(miro);

  return <div>CompLogic</div>;
};

export default CompLogic;
