const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
const searchName = '';


function findMatching(drivers, searchName) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === searchName.toLowerCase()
    });
}

console.log(findMatching(drivers, 'Sammy'));


// this function takes an array of drivers' names and a string as arguments
// for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(drivers, letters) {
    return drivers.filter(function(driver) {
        return driver.startsWith(letters)
    });
}

const matchedDrivers = fuzzyMatch(drivers, 'Sa');
console.log(matchedDrivers);


//This function takes an array of driver objects and a string as arguments. 
//Each driver object has two properties: name and hometown. 
//The function should return each element whose name property matches the provided string argument.

const driversObj = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];



function matchName (driversObj, matchingName) {
    return driversObj.filter(function (driver) {
        return driver.name === matchingName
    });
}

const matchingObj = matchName (driversObj, 'Sally');
console.log(matchingObj);