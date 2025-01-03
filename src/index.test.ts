import lib from "./index";

describe("Test lib", () => {
    it("should be defined and type of object", () => {
        expect(lib).toBeDefined();
        expect(lib).toBeInstanceOf(Object);
    });

    it("should have medium property and type of object", () => {
        expect(lib.medium).toBeDefined();
        expect(lib.medium).toBeInstanceOf(Object);
    });

    it("should have hashnode property and type of object", () => {
        expect(lib.hashnode).toBeDefined();
        expect(lib.hashnode).toBeInstanceOf(Object);
    });

    it("should have devto property and type of object", () => {
        expect(lib.devto).toBeDefined();
        expect(lib.devto).toBeInstanceOf(Object);
    });
});
