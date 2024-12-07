import { checkLifeCycle } from "./checkLifeCycle";
import { getInformationCommunityRequest } from "../requests/getInformationCommunityRequest";
import groupInfaHeader from "../components/groupInfaHeader/groupInfaHeader";
import adminCommunityBlock from "../components/adminCommunityBlock/adminCommunityBlock";
import groupPage from "../components/groupPage/groupPage";
import shortFilterBlock from "../components/shortFilterBlock/shortFilterBlock";
import { getUserRoleCommunityRequest } from "../requests/getUserRoleCommunityRequest";
import post from "../components/post/post";
import { readFilterDatas } from "./readFilterDatas";
import { createUrl } from "./createUrl";
import { getCommunityPostsRequest } from "../requests/getCommunityPostsRequest";
import { markPost } from "./markPost";
import { openConcretePost } from "./openConcretPost";
import { subscribe } from "./subscribe";
import { unSubscribe } from "./unsubscribe";

export function getInformationCommunity(){
    let token = localStorage.getItem('token');
    let mainBlock = document.getElementById('app');
    let groupLink = document.querySelectorAll('.group-title');
    let userCommunityRole;
    let groupId;
    let sendButton;

    let body = {'tags' : [], 'sorting': '', 'page': 1, 'size': 5};

    

    groupLink.forEach(el => {
        el.addEventListener('click', async (event) => {
            groupId = event.target.id;
            try {
                userCommunityRole = await getUserRoleCommunityRequest(groupId, token);
            }
            catch{
                (error) => {
                    console.log(error);
                    userCommunityRole = null;
                    console.log(userCommunityRole);
                }
            }
            getInformationCommunityRequest(groupId).then(
                async (data) => {
                    window.history.pushState({}, 'some title', `/communities/${groupId}`);
                    mainBlock.innerHTML = '';
                    await groupPage();
                    await groupInfaHeader(data, userCommunityRole);
                    data['administrators'].forEach(async (el) => {
                        await adminCommunityBlock(el);
                    });
                    await shortFilterBlock();
                    let newUrl = createUrl(body);
                    
                    let block = document.querySelector('.section-posts');
                    let textBlock = document.createElement('p');
                    textBlock.className += 'unauthorized-text';
                    textBlock.textContent = 'Родной, ты не подписан на группу';
                    if (token !== null && checkLifeCycle(token)){
                        console.log(userCommunityRole)
                        if ((userCommunityRole === null || userCommunityRole === undefined) && data['isClosed']){
                            block.appendChild(textBlock);
                        }
                        else{
                            getCommunityPostsRequest(newUrl, token, groupId).then(data => {
                                data['posts'].forEach(el => {
                                    post(el);
                                })
                                markPost();
                                openConcretePost();
                           })   
                        }
                    }
                    else if ((token === null || !checkLifeCycle(token)) && data['isClosed']){
                        block.appendChild(textBlock);
                    }
                    else{
                        getCommunityPostsRequest(newUrl, token, groupId).then(data => {
                             data['posts'].forEach(el => {
                                post(el);
                             })
                            markPost();
                            openConcretePost();
                            
                        })
                     }
                    subscribe();
                    unSubscribe();
                    sendButton = document.querySelector('.send-filter-button');

                    console.log(sendButton);
                    
                    //По-хорошему это надо выносить отдельным файлом!!!!!!!!!!
                    sendButton.addEventListener('click', () => {
                        body = readFilterDatas(body);
                        let urlMask = createUrl(body);

                        window.history.pushState({}, 'some title', `/${urlMask}`);
                        // console.log(urlMask);
                        // console.log(body);

                        getCommunityPostsRequest(newUrl, token, groupId).then(data => {
                            data['posts'].forEach(el => {
                                document.querySelector('.section-posts').innerHTML = '';
                                post(el);
                            })
                            markPost();
                            openConcretePost();
                       })
                    });
                }
            );
        })
    })

    
}