import answerCommentInput from "../components/answerComment/answerCommentInput";
import { answerComment } from "./answerComment";

export function answerButtonAction(){
    let answerLink = document.querySelectorAll('.answer-comment');
        for (const elem of answerLink) {
            elem.addEventListener('click', async (event) => {
                let commentId = event.target.closest('.comment').id;
                console.log(commentId);
                await answerCommentInput();
                await answerComment(commentId);
            });
        }
}