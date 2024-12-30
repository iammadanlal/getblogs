import { MEDIUM_BLOG_API_URL, RSS_URL } from "../config";
import getMediumBlogPosts from "./getMediumBlogPosts";
import { MediumBlogPostResponse } from "./medium.type";

global.fetch = jest.fn();

const mockResponse: MediumBlogPostResponse[] = [
    {
        title: 'H',
        pubDate: '2021-09-01',
        link: 'https://medium.com/@jfpetersphoto/hello-world-1',
        content: 'This is a test blog post',
        categories: ['test'],
        thumbnail: 'https://medium.com/@jfpetersphoto/hello-world-1',
        description: 'This is a test blog post',
        author: '@jfpetersphoto'
    }
]

describe('getMediumBlogPosts', () => {
    beforeEach(()=>{
        (fetch as jest.Mock).mockClear();
    })
    
    it('should fetch medium blog posts for valid username', async () => {
        (fetch as jest.Mock).mockResolvedValue({
            json: () => Promise.resolve({
                items: mockResponse
            })
        });

        const username = '@testuser';
        const response = await getMediumBlogPosts(username);
        expect(fetch).toHaveBeenCalledWith(RSS_URL + MEDIUM_BLOG_API_URL + username);
        expect(response).toEqual(mockResponse);
    });

    it('should throw error if username is not provided', async () => {
        await expect(getMediumBlogPosts('')).rejects.toThrow('Username is required');
    });

    it('should handle API errors', async () => {
        (fetch as jest.Mock).mockRejectedValue(new Error('API Error'));
        await expect(getMediumBlogPosts('@testuser')).rejects.toThrow('API Error');
    });

    it('should handle empty response', async () => {
        (fetch as jest.Mock).mockResolvedValue({
            json: () => Promise.resolve({ items: []})
        });

        const result = await getMediumBlogPosts('@testuser');
        expect(result).toEqual([]);
    });
});