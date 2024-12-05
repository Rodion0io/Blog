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
import { treeComment } from "../treeComment/treeComment";
import { treeCommentRequest } from "../../requests/treeCommentRequest";

async function fullPostPage(data) {
    let address = '';

    post(data);
    commentBlock(data);

    if (data['comments'].length !== 0) {
        let parentBlock = document.querySelector('.comment-container');
        for (const element of data['comments']) {
            await comment(element, parentBlock);
        }

        setupCommentInteractions(parentBlock);
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

    if (data["addressId"] !== null) {
        coordinateBlock.appendChild(locationImage);
        coordinateBlock.appendChild(locationText);
        otherInfaBlock.appendChild(coordinateBlock);
        address = await addressChain(data["addressId"]);
        locationText.textContent = address;
    }
}

function setupCommentInteractions(parentBlock) {
    parentBlock.addEventListener('click', async (event) => {
        if (event.target.classList.contains('redact-icon')) {
            let commentId = event.target.closest('.comment').id;
            console.log(commentId);
            await redactInput();
            await redactComment(commentId);
        } else if (event.target.classList.contains('answer-comment') || event.target.classList.contains('open-answer')) {
            let commentId = event.target.closest('.comment').id;
            console.log(commentId);
            await answerCommentInput();
            await answerComment(commentId);
        }
    });

    parentBlock.addEventListener('click', async (event) => {
        if (event.target.classList.contains('open-answer')) {
            let commentId = event.target.closest('.comment').id;
            let treeCommentData;
            console.log(commentId);
            await treeCommentRequest(commentId).then(data => treeCommentData = data).catch(error => console.log(error));
            console.log(treeCommentData);

            let parentBlockTree = document.createElement('div');
            parentBlockTree.className = 'tree-parent-block';

            treeCommentData.forEach(el => {
                console.log("Adding new comment:", el);
                comment(el, parentBlockTree);
            });

            let fullCommentParent = event.target.closest('.open-answer').parentNode;

            console.log("Replacing fullComment with new block");
            fullCommentParent.replaceChild(parentBlockTree, event.target.closest('.open-answer'));

            setupCommentInteractions(parentBlockTree);
        }
    });
}

export default fullPostPage;