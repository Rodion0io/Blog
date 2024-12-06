import { checkLifeCycle } from "./checkLifeCycle";
import { getInformationCommunityRequest } from "../requests/getInformationCommunityRequest";
import groupInfaHeader from "../components/groupInfaHeader/groupInfaHeader";
import adminCommunityBlock from "../components/adminCommunityBlock/adminCommunityBlock";
import groupPage from "../components/groupPage/groupPage";
import shortFilterBlock from "../components/shortFilterBlock/shortFilterBlock";
import { getUserRoleCommunityRequest } from "../requests/getUserRoleCommunityRequest";
import post from "../components/post/post";

export function getInformationCommunity(){
    let token = localStorage.getItem('token');
    let mainBlock = document.getElementById('app');
    let groupLink = document.querySelectorAll('.group-title');
    let userCommunityRole;

    try {
        userCommunityRole = getUserRoleCommunityRequest(groupId, token);
    }
    catch{
        (error) => {
            console.log(error);
        }
    }

    groupLink.forEach(el => {
        el.addEventListener('click', (event) => {
            let groupId = event.target.id;
            getInformationCommunityRequest(groupId).then(
                async (data) => {
                    window.history.pushState({}, 'some title', `/communities/${groupId}`);
                    mainBlock.innerHTML = '';
                    await groupPage();
                    await groupInfaHeader(data);
                    data['administrators'].forEach(async (el) => {
                        await adminCommunityBlock(el);
                    });
                    shortFilterBlock();
                    if (token !== null && checkLifeCycle(token)){
                        if (userCommunityRole === null && data['isClosed']){
                            let block = document.querySelector('.section-posts');
                            let textBlock = document.createElement('p');
                            textBlock.className += 'unauthorized-text';
                            textBlock.textContent = 'Родной, ты не подписан на группу';
                            block.appendChild(textBlock);
                        }
                        // else{
                        //     post()
                        // }
                    }
                }
            );
        })
    })
}