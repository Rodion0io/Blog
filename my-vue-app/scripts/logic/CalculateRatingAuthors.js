import { LIKE_RATIO } from "../../constans";
import { POST_RATIO } from "../../constans";


export function CalculateRatingAuthors(countLikes, countPosts){
    let ratingLikes = countLikes * LIKE_RATIO;
    let ratingPost = countPosts * POST_RATIO;
    let result = ratingLikes + ratingPost;
    return result;
}