// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
const driverObjects = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' }
];

function findMatching(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

function fuzzyMatch(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

function matchName(driverObjects, query) {
  return driverObjects.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}
//
console.log(findMatching(drivers, 'Bobby')); // Output: ['Bobby', 'Bobby']
console.log(fuzzyMatch(drivers, 'Sa'));      // Output: ['Sammy', 'Sarah']
console.log(matchName(driverObjects, 'Sally')); // Output: [{ name: 'Sally', hometown: 'Cleveland' }]
