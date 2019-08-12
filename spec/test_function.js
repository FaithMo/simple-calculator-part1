describe("Add", function () {

    it("should add zeros", function () {
        let answer1 = addZero(0,0);
        expect(answer1).toBe(0);
    });

    it("should add negative numbers", function () {
        let answer2 = addNeg(-1,-1);
        expect(answer2).toBe(-2);
    });

    it("should add two numbers", function () {
        let answer3 = add(4,5);
        expect(answer3).toBe(9);
    });

    it("should add multiple numbers", function () {
        let answer4 = addMultiple(1,2,3,4);
        expect(answer4).toBe(10);
    });

});

describe("Multiply", function(){
    it("should multiply numbers", function () {
        let answer5 = mutliply(1,2);
        expect(answer5).toBe(2);
    });
    it("should multiply multiple numbers", function(){
        let answer6= multiplyMul(1,2,3,4);
        expect(answer6).toBe(24);
    })

});