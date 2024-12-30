export type DevDotToBlogPostResponse = {
    type_of: string;
    id: string;
    title: string;  
    description: string;
    readable_publish_date: string;
    slug: string;
    path: string;
    url: string;
    comments_count: number;
    public_reactions_count: number;
    collection_id: string | null;
    published_timestamp: string;
    positive_reactions_count: number;
    cover_image: string | null;
    social_image: string | null;
    canonical_url: string;
    created_at: string;
    edited_at: string | null;
    crossposted_at: string | null;
    published_at: string;
    last_comment_at: string | null;
    reading_time_minutes: number;
    tag_list: string[];
    tags: string;
    user: {
        name: string;
        username: string;
        twitter_username: string | null;
        github_username: string | null;
        user_id: number;
        website_url: string | null;
        profile_image: string;
        profile_image_90: string;
    }
}
