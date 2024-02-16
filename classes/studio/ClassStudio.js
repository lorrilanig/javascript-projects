//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores = []) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(num) {
        this.scores.push(num)
        return this.scores;
        }
    avearge() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
           sum = sum + this.scores[i]
        }
        return Math.round(sum/this.scores.length); 
        }
    }




let bBear = new CrewCandidate('Bubba Bear', 135, [88,85,90]);
console.log(bBear);
bBear.addScore(83);
console.log(bBear.avearge());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.