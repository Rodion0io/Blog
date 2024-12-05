import redactInput from "../components/redactInput/redactInput";
import { redactComment } from "./redactComment";

export function redactButtonAction(){
    let redactButton = document.querySelectorAll('.redact-icon');
    console.log(redactButton)
        for (const elem of redactButton) {
            elem.addEventListener('click', async (event) => {
                let commentId = event.target.closest('.comment').id;
                console.log(commentId);
                    await redactInput();
                    await redactComment(commentId);
            });
        }
}