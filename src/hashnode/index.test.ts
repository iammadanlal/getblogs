import hashnode from './index';
import getHashnodeBlogPosts from './getHashnodeBlogPosts';

describe('Test Hashnode Module', () => {
    it('should export getBlogPosts function', () => {
        expect(hashnode).toBeDefined();
        expect(hashnode.getBlogPosts).toBeDefined();
        expect(hashnode.getBlogPosts).toEqual(getHashnodeBlogPosts);
    })
});
