export type HashNodeBlogPostNodesResponse = {
    title: string;
    id: string;
    cuid: string;
    publishedAt: string;
    slug: string;
    coverImage: {url: string};
    brief: string;
    content: { text: string};
    tags: [{
        name: string;
    }];
    likedBy: {
        totalDocuments: number;
    };
    comments: {
        totalDocuments: number;
    };
    author: {
        username: string;
        name: string;
        profilePicture: string;
    }
}

export type HashNodeBlogPostByUsernameResponse = {
    data: {
        user: {
            posts: {
                nodes: HashNodeBlogPostNodesResponse[]
            }
        }
    }
}