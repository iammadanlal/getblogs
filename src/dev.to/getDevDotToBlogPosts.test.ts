import getDevDotToBlogPosts from './getDevDotToBlogPosts';
import { DevDotToBlogPostResponse } from './devdotto.type';
import { DEVDOTTO_API_URL } from '../config';

global.fetch = jest.fn();

const mockResponse: DevDotToBlogPostResponse[] = [
    {
        type_of: "article",
        id: "1",
        title: "Test Blog Post",
        description: "This is a test blog post",
        readable_publish_date: "2023-10-01",
        slug: "test-blog-post",
        path: "/test-blog-post",
        url: "https://dev.to/test-blog-post",
        comments_count: 0,
        public_reactions_count: 0,
        collection_id: null,
        published_timestamp: "2023-10-01T00:00:00Z",
        positive_reactions_count: 0,
        cover_image: null,
        social_image: null,
        canonical_url: "https://dev.to/test-blog-post",
        created_at: "2023-10-01T00:00:00Z",
        edited_at: null,
        crossposted_at: null,
        published_at: "2023-10-01T00:00:00Z",
        last_comment_at: null,
        reading_time_minutes: 1,
        tag_list: ["test"],
        tags: "test",
        user: {
            name: "Test User",
            username: "testuser",
            twitter_username: "testuser",
            github_username: "testuser",
            user_id: 1,
            website_url: "https://testuser.com",
            profile_image: "https://testuser.com/profile.jpg",
            profile_image_90: "https://testuser.com/profile90.jpg",
        },
    },
];

describe('getDevDotToBlogPosts', () => {
    beforeEach(() => {
        (fetch as jest.Mock).mockClear();
    });

    it('should fetch the blog posts from the Dev.to API', async () => {
        (fetch as jest.Mock).mockResolvedValue({
            json: () => Promise.resolve(mockResponse)
        });

        const username = 'testuser';
        const response = await getDevDotToBlogPosts(username);

        expect(fetch).toHaveBeenCalledWith(DEVDOTTO_API_URL + `articles?username=${username}`);
        expect(response).toEqual(mockResponse);
    });

    it('should return an empty array if there are no blog posts', async () => {
        (fetch as jest.Mock).mockImplementationOnce(()=>
            Promise.resolve({
                json: () => Promise.resolve([])
            })
        );

        const username = 'testuser';
        const response = await getDevDotToBlogPosts(username);

        expect(fetch).toHaveBeenCalledWith(DEVDOTTO_API_URL + `articles?username=${username}`);
        expect(response).toEqual([]);
    });

    it('should return an error if the fetch fails', async () => {
        const error = new Error('An error occurred');
        (fetch as jest.Mock).mockRejectedValue(error);

        const username = 'testuser';
        const response = await getDevDotToBlogPosts(username);

        expect(fetch).toHaveBeenCalledWith(DEVDOTTO_API_URL + `articles?username=${username}`);
        expect(response).toEqual(error);
    });
});
