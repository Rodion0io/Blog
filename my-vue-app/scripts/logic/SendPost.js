import { addPostInCommunityRequest } from "../requests/addPostInCommunityRequest";
import { addPostRequest } from "../requests/addPostRequest";
import { checkLifeCycle } from "./checkLifeCycle";
import { getUserRoleCommunityRequest } from "../requests/getUserRoleCommunityRequest";


export function sendPost(){
    let token = localStorage.getItem('token');
    let button = document.querySelector('.create-new-post');
    

    button.addEventListener('click', async () => {
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

        let datas = {"title": namePost, "description": text, "readingTime": Number(timeRead), "image": linkPhoto !== '' ? linkPhoto : null, "addressId": null, "tags": tagsArray};

        console.log(datas);

        // console.log(await getUserRoleCommunityRequest(communityId, token) === "Administrator");
        
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
    })
}