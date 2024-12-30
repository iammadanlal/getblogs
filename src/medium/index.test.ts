import medium from './index';
import getMediumBlogPosts from './getMediumBlogPosts';

describe('Medium Module', () => {
    it('should export getBlogPosts function', () => {
        expect(medium).toBeDefined();
        expect(medium.getBlogPosts).toBeDefined();
        expect(medium.getBlogPosts).toBe(getMediumBlogPosts);
    });
});
