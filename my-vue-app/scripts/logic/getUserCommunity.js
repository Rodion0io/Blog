import { getUsersCommunityRequest } from "../requests/getUsersCommunityRequest";
import { checkLifeCycle } from "./checkLifeCycle";

export async function getUserCommunity(){
    let token = localStorage.getItem('token');
    let userCommunityList;
    

    if (token !== null && checkLifeCycle(token)){
        try {
            userCommunityList = await getUsersCommunityRequest(token);
        }
        catch{
            (error) => {
                console.log(error);
            }
        };

        userCommunityList.forEach(currentGroup => {
            let currentPost = document.getElementById(currentGroup['communityId']);
            let childBlock = currentPost.querySelector('.butt-block');
            childBlock.innerHTML = '';
            if (currentGroup['role'] === 'Subscriber'){
                let unsubscribeButton = document.createElement('button');
                unsubscribeButton.className += 'btn unsubscribe';
                unsubscribeButton.textContent = 'Отписаться';
                childBlock.appendChild(unsubscribeButton);
            }
            else if (currentGroup['role'] === 'Administrator'){
                return;
            }
        })
    }
    

    
}