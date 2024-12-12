import { addPostInCommunityRequest } from "../requests/addPostInCommunityRequest";
import { addPostRequest } from "../requests/addPostRequest";
import { checkLifeCycle } from "./checkLifeCycle";
import { getUserRoleCommunityRequest } from "../requests/getUserRoleCommunityRequest";
import { validationCreatepost } from "./validationCreatePost";

export function sendPost(){
    let token = localStorage.getItem('token');
    let button = document.querySelector('.create-new-post');

    button.addEventListener('click', async () => {
        let namePost = document.getElementById('input-name');
        let timeRead = document.getElementById('input-start-time');
        let community = document.getElementById('input-groups');
        let tags = document.querySelector('.tags');
        let linkPhoto = document.getElementById('input-photo-id');
        let text = document.querySelector('.textarea-create-post');
        let address = document.querySelectorAll('.address');
        let errorMessage = document.querySelector('.error-message');
        let firstAddressId = null;

        // console.log(address);

        let tagsArray = [...tags.selectedOptions].map(el => el.id);

        let checker = validationCreatepost(namePost, timeRead, linkPhoto, text, errorMessage, tagsArray, tags);

        if (checker === 1){
            return;
        }
        else{
            errorMessage.style = "display: none";
            errorMessage.textContent = "";
            for (let i = address.length - 1; i > 0; i--){
                let currentAdress = address[i];
                let selectedInput = currentAdress.querySelector('select');
                if (selectedInput){
                    let selectedOption = selectedInput.options[selectedInput.selectedIndex];
                    if (selectedOption && selectedOption.id) {
                        firstAddressId = selectedOption.id;
                        break;
                    }
                }
            }
            let communityId = community.options[community.options.selectedIndex].id;
            let datas = {"title": namePost.value, "description": text.value, "readingTime": Number(timeRead.value), "image": linkPhoto.value !== '' ? linkPhoto.value : null, "addressId": firstAddressId, "tags": tagsArray};


            if (token !== null && checkLifeCycle(token)){
                // if (community.id !== null || community.id !== undefined){
                if (communityId !== ""){
                    if (await getUserRoleCommunityRequest(communityId, token) === "Administrator"){
                        addPostInCommunityRequest(communityId, token, datas).then(data => console.log(data)).catch(error => console.log(error));
                        window.location.pathname = '/';
                    }
                    else{
                        alert("Вы не являетесь администратором данного сообщества!");
                    }
                }
                else{
                    // console.log(namePost);
                    // console.log(text)
                    // console.log(timeRead)
                    // console.log(linkPhoto)
                    // console.log(null)
                    // console.log(tags)
                    addPostRequest(token, datas).then(data => console.log(data)).catch(error => console.log(error));
                    window.location.pathname = '/';
                } 
            }
            else{
                alert("Вы не авторизованы");
            }
        }
        

        
        
    })
}