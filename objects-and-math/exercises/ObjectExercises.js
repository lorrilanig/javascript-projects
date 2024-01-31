let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {
      return Math.floor(Math.random()*11);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {
      return Math.floor(Math.random()*11)
   }
};

let megaChimp = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {
      return Math.floor(Math.random()*11);
   }
};

let hound = {
   name: "Leroy",
   species: "Beagle",
   mass: 11,
   age: 6,
   astronautID: 4,
   move: function() {
      return Math.floor(Math.random()*11);
   }
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.00000001,
   age: 1,
   astronautID: 5,
   move: function() {
      return Math.floor(Math.random()*11);
   }
};

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, megaChimp, hound, waterBear]
// Print out the relevant information about each animal.
let crewReports = (animal) => {
   for (item in animal) {
      return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`
   }
}
//console.log(crewReports(superChimpOne));

// Start an animal race!
let fitnessTest = (arr) => {
   let result = [], steps, round;
   for (let i = 0; i < arr.length; i++) {
      round = 0;
      steps = 0;
      while (steps < 21) {
         steps += arr[i].move();
         round++
      }
      result.push(`${arr[i].name} took ${round} turns to take 20 steps.`);
   }
   return result;
};

console.log(fitnessTest(crew));