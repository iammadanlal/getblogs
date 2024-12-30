import { MEDIUM_BLOG_API_URL, RSS_URL } from "../config";
import { MediumBlogPostResponse } from "./medium.type";

export default async function getMediumBlogPosts(username: string): Promise<MediumBlogPostResponse[]> {
    if(!username){
        throw new Error('Username is required');
    }
    const response = await fetch(RSS_URL + MEDIUM_BLOG_API_URL + username);
    const data = await response.json();
    return data.items;
}
