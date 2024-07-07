/**Finds drivers whose names match the given string (case-insensitive).
 * 
 * @param {string[]} drivers - Array of driver names.
 * @param {string} query - String to match against driver names.
 * @returns {string[]} - Array of matching driver names.
 */
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

/**
 * Finds drivers whose names start with the given string.
 * 
 * @param {string[]} drivers - Array of driver names.
 * @param {string} query - String prefix to match against driver names.
 * @returns {string[]} - Array of driver names that start with the query string.
 */
function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

/**
 * Finds driver objects whose name property matches the given string.
 * 
 * @param {Object[]} drivers - Array of driver objects, each with a `name` and `hometown` property.
 * @param {string} query - String to match against the name property of each driver.
 * @returns {Object[]} - Array of driver objects whose name matches the query string.
 */
function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}

// Example usage and testing the functions
const drivers = ['Alice', 'Bob', 'Charlie', 'David'];
console.log(findMatching(drivers, 'alice')); // ['Alice']
console.log(fuzzyMatch(drivers, 'B')); // ['Bob']
console.log(fuzzyMatch(drivers, 'Ch')); // ['Charlie']

const driverObjects = [
    { name: 'Alice', hometown: 'New York' },
    { name: 'Bob', hometown: 'Los Angeles' },
    { name: 'Charlie', hometown: 'Chicago' },
];
console.log(matchName(driverObjects, 'bob')); // [{ name: 'Bob', hometown: 'Los Angeles' }]

