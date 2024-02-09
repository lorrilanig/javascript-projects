// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  
  // Write your unit tests here!
  test("should return 'nonprofit' as the organization", function() {
    expect(launchcode.organization).toBe("nonprofit");
 });
});
