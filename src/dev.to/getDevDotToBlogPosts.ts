import { DEVDOTTO_API_URL } from "../config";
import { DevDotToBlogPostResponse } from "./devdotto.type";

export default async function getDevDotToBlogPosts(username: string): Promise<DevDotToBlogPostResponse[]> {
    return await fetch(DEVDOTTO_API_URL + `articles?username=${username}`)
    .then(response => response.json())
    .catch(error=>error);
}
