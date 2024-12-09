import { addPostInCommunityRequest } from "../requests/addPostInCommunityRequest";
import { addPostRequest } from "../requests/addPostRequest";
import { checkLifeCycle } from "./checkLifeCycle";


export function sendPost(){
    let token = localStorage.getItem('token');
    let button = document.querySelector('.create-new-post');
    

    button.addEventListener('click', () => {
        let namePost = document.getElementById('input-name').value;
        let timeRead = document.getElementById('input-start-time').value;
        let community = document.getElementById('input-groups');
        let tags = document.querySelector('.tags');
        let linkPhoto = document.getElementById('input-photo-id').value;
        let text = document.querySelector('.textarea-create-post').value;
        // let lastBlockAddress = document.querySelector('.create-new-post');

        // console.log(tags.selectedOptions[0].id)
        
        // console.log(typeof(tags.selectedOptions));

        let communityId = community.options[community.options.selectedIndex].id;

        console.log(communityId);

        let tagsArray = [...tags.selectedOptions].map(el => el.id);

        // console.log(tagsArray);

        let datas = {"title": String(namePost), "description": String(text), "readingTime": Number(timeRead), "image": linkPhoto !== '' ? String(linkPhoto) : null, "addressId": null, "tags": tagsArray};

        console.log(datas);
        
        if (token !== null && checkLifeCycle(token)){
            // if (community.id !== null || community.id !== undefined){
            if (communityId !== ""){
                addPostInCommunityRequest(communityId, token, datas).then(data => console.log(data)).catch(error => console.log(error));
            }
            else{
                // console.log(namePost);
                // console.log(text)
                // console.log(timeRead)
                // console.log(linkPhoto)
                // console.log(null)
                // console.log(tags)
                addPostRequest(token, datas).then(data => console.log(data)).catch(error => console.log(error));
                window.location.path
            } 
        }
        else{
            alert("Вы не авторизованы");
        }
    })
}