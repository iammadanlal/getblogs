export type HashnodeBlogPostResponse = {
    title: string;
    dateAdded: string;
    slug: string;
    coverImage: string;
    brief: string;
    content: string;
    tags: string[];
    likes: number;
    responses: number;
    bookmarks: number;
    comments: number;
    publication: {
        title: string;
        username: string;
        tags: string[];
        profileImage: string;
    }
}