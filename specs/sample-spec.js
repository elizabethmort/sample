describe("The distance function", function () {
    it("finds that there is zero distance between the same point and itself", function () {
        var a = { x: 0, y: 0 };
        var b = { x: 0, y: 0 };
        expect(distance(a, b)).toBe(0);
    });
    it("finds the distance along the x axis", function () {
        var a = { x: 0, y: 0 };
        var b = { x: 0, y: 3 };
        expect(distance(a, b)).toBe(3);
    });
    it("finds the distance along the y axis", function () {
        var a = { x: 0, y: 0 };
        var b = { x: 3, y: 0 };
        expect(distance(a, b)).toBe(3);
    });
    it("finds the distance for arbitrary points", function () {
        var a = { x: 0, y: 0 };
        var b = { x: 3.5, y: 6.9 };
        expect(distance(a, b)).toBeCloseTo(7.74, 0.01);
    });
});