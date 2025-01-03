import getHashnodeBlogPosts from "./getHashnodeBlogPosts";
import { HashNodeBlogPostByUsernameResponse } from "./hashnode.type";

global.fetch = jest.fn();

const mockResponse: HashNodeBlogPostByUsernameResponse = {
    data: {
        user: {
            posts: {
                nodes: [
                    {
                        title: "title",
                        id: "id",
                        cuid: "cuid",
                        publishedAt: "publishedAt",
                        slug: "slug",
                        coverImage: {
                            url: "url",
                        },
                        brief: "brief",
                        content: {
                            text: "text",
                        },
                        tags: [
                            {
                                name: "name",
                            },
                        ],
                        comments: {
                            totalDocuments: 0,
                        },
                        likedBy: {
                            totalDocuments: 0,
                        },
                        author: {
                            username: "username",
                            name: "name",
                            profilePicture: "profilePicture",
                        },
                    },
                ],
            },
        },
    },
};

describe("Test getHashnodeBlogPosts function", () => {
    it("should return an array of blog posts", async () => {
        (fetch as jest.Mock).mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockResponse),
        });

        const response = await getHashnodeBlogPosts("username");
        expect(response).toEqual(mockResponse);
    });

    it("should return an error if api not working", async () => {
        (fetch as jest.Mock).mockRejectedValue(new Error("API Error"));

        const response = await getHashnodeBlogPosts("username");
        expect(response).toEqual(new Error("API Error"));
    });
});
