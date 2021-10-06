let functions = require("../src/simple-calculator.js");
describe("Simple Calculator", () => {
  describe("Add function", () => {
    it("should add zeros", () => {
      let answer1 = functions.add(0, 0);
      expect(answer1).toBe(0);
    });

    it("should add negative numbers", () => {
      let answer2 = functions.add(-1, -1);
      expect(answer2).toBe(-2);
    });

    it("should add two numbers", () => {
      let answer3 = functions.add(1, 2);
      expect(answer3).toBe(3);
    });

    it("should add multiple numbers", () => {
      let answer4 = functions.add(1, 2, 3, 4);
      expect(answer4).toBe(10);
    });
  });

  describe("Multiplication function", () => {
    it("should multiply numbers", () => {
      let answer5 = functions.multiply(1, 2);
      expect(answer5).toBe(2);
    });
    it("should multiply multiple numbers", () => {
      let answer6 = functions.multiply(1, 2, 3, 4);
      expect(answer6).toBe(24);
    });
  });
});
