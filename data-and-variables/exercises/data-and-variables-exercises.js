// Declare and assign the variables below
let shuttleName = 'Determination';
let speed = 17500;
let distanceMars = 225000000;
let distanceMoon = 384400;
let milesPerKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName); 
console.log(typeof speed);
console.log(typeof distanceMars);
console.log(typeof distanceMoon);
console.log(typeof milesPerKilometer);

// Calculate a space mission below
let milesToMars = distanceMars * milesPerKilometer;

//console.log(milesToMars); //returns 139725000
let hoursToMars = milesToMars / speed; 
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(`${shuttleName} will take ${daysToMars} to reach Mars.`)

// Calculate a trip to the moon below
let milesToMoon = distanceMoon * milesPerKilometer; 
let hoursToMoon = milesToMoon / speed;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below
console.log(`${shuttleName} will take ${daysToMoon} to reach the Moon`);