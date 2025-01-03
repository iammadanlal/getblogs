import devto from "./index";
import getDevDotToBlogPosts from "./getDevDotToBlogPosts";

describe("Test Dev.to Module", () => {
    it("should be defined, export an object and have getBlogPosts property", () => {
        expect(devto).toBeDefined();
        expect(devto).toBeInstanceOf(Object);
        expect(getDevDotToBlogPosts).toBeDefined();
        expect(devto.getBlogPosts).toEqual(getDevDotToBlogPosts);
    });
});
