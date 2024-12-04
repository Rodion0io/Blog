import post from "../post/post";
import { addressChain } from "../../logic/addressChain";
import commentBlock from "../commentBlock/commentBlock";
import comment from "../comment/comment";
import commentForm from "../commentForm/commentForm";
import { markPost } from "../../logic/markPost";
import { addComment } from "../../logic/addComment";
import { deleteComment } from "../../logic/deleteComment";

async function fullPostPage(data){

    let address = '';
    // let parentBlock = document.querySelector('.section-post');

    
    // let container = document.createElement('div');
    // container.className += 'container';

    post(data);
    commentBlock(data);

    if (data['comments'].length !== 0){
        for (const element of data['comments']) {
            await comment(element);
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