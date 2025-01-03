import { HASHNODE_API_URL } from "../config";
import { HashNodeBlogPostByUsernameResponse } from "./hashnode.type";

export default async function getHashnodeBlogPosts(
    username: string,
    page: number = 1,
    limit: number = 5,
): Promise<HashNodeBlogPostByUsernameResponse> {
    return await fetch(HASHNODE_API_URL, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            query: `query{
            user(username: "${username}"){
                posts(page: ${page}, pageSize: ${limit}){
                    nodes{
                        title
                        id
                        cuid
                        publishedAt
                        slug
                        coverImage{
                            url
                        }
                        brief
                        content{
                            text
                        },
                        tags{
                            name
                        }
                        comments(first:0){
                            totalDocuments,
                        }
                        likedBy(first: 0){
                            totalDocuments
                        }
                        author{
                            username
                            name
                            profilePicture
                        }
                    }
                    totalDocuments
                }
            }
        }`,
        }),
    })
        .then((response) => response.json())
        .catch((error) => error);
}
