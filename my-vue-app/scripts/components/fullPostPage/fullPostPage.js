import post from "../post/post";
import { addressChain } from "../../logic/addressChain";
import commentBlock from "../commentBlock/commentBlock";
import comment from "../comment/comment";
import commentForm from "../commentForm/commentForm";
import { markPost } from "../../logic/markPost";
import { addComment } from "../../logic/addComment";
import { deleteComment } from "../../logic/deleteComment";
import { redactComment } from "../../logic/redactComment";
import redactInput from "../redactInput/redactInput";
import answerCommentInput from "../answerComment/answerCommentInput";
import { answerComment } from "../../logic/answerComment";


async function fullPostPage(data){

    let address = '';

    post(data);
    commentBlock(data);

    if (data['comments'].length !== 0){
        for (const element of data['comments']) {
            await comment(element);
        }
        let redactButton = document.querySelectorAll('.redact-icon');
        for (const elem of redactButton) {
            elem.addEventListener('click', async (event) => {
                let commentId = event.target.closest('.comment').id;
                console.log(commentId);
                    await redactInput();
                    await redactComment(commentId);
            });
        }

        let answerLink = document.querySelectorAll('.answer-comment');
        for (const elem of answerLink) {
            elem.addEventListener('click', async (event) => {
                let commentId = event.target.closest('.comment').id;
                console.log(commentId);
                await answerCommentInput();
                await answerComment(commentId);
            });
        }
        await deleteComment();
        
        
    }

    commentForm();
    markPost();

    addComment();

    
    
    let otherInfaBlock = document.querySelector('.other-infa');

    let coordinateBlock = document.createElement('div');
    coordinateBlock.className += 'coordinate-block';

    let locationImage = document.createElement('img');
    locationImage.className += 'location-image';
    locationImage.src = '../../../public/mapIcon.svg';
    locationImage.alt = 'иконка';

    let locationText = document.createElement('p');
    locationText.className += ' location-text';

    if (data["addressId"] !== null){
        coordinateBlock.appendChild(locationImage);
        coordinateBlock.appendChild(locationText);
        otherInfaBlock.appendChild(coordinateBlock);
        address = await addressChain(data["addressId"]);
        // locationText.textContent = 
    }

    // if (address !== undefined){
        
    // }
    
    // container.appendChild(postBlock)
    // parentBlock.appendChild(container);
}

export default fullPostPage;