import post from "../post/post";
import { addressChain } from "../../logic/addressChain";
import commentBlock from "../commentBlock/commentBlock";
import comment from "../comment/comment";
import commentForm from "../commentForm/commentForm";

function fullPostPage(data){

    let address = '';
    let parentBlock = document.querySelector('.section-post');

    if (data["addressId"] !== null){
        address = addressChain(data["addressId"]);
    }

    console.log(address);
    
    // let container = document.createElement('div');
    // container.className += 'container';

    post(data);
    commentBlock(data);

    if (data['comments'].length !== 0){
        data['comments'].forEach(element => {
            comment(element);
        })
    }

    commentForm()

    let otherInfaBlock = document.querySelector('.other-infa');

    let coordinateBlock = document.createElement('div');
    coordinateBlock.className += 'coordinate-block';

    let locationImage = document.createElement('img');
    locationImage.className += 'location-image';
    locationImage.src = '../../../public/mapIcon.svg';
    locationImage.alt = 'иконка';

    let locationText = document.createElement('p');
    locationText.className += ' location-text';
    //временно, сейчас бахнем запрос
    // locationText.textContent = 'Томская область, г. Томск, пр. Ленина, д. 36 к.2';
    locationText.textContent = address;


    if (address !== undefined){
        coordinateBlock.appendChild(locationImage);
        coordinateBlock.appendChild(locationText);
        otherInfaBlock.appendChild(coordinateBlock);
    }
    
    // container.appendChild(postBlock)
    // parentBlock.appendChild(container);
}

export default fullPostPage;