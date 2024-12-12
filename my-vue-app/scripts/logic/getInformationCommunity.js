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
import { openCreaterPost } from "./openCreaterPost";
import router from "./router";
import { openComments } from "./openComment";
import { createWrapperBlock } from "./createWrapperBlock";

export function getInformationCommunity(filters = {}) {
    let token = localStorage.getItem('token');
    let mainBlock = document.getElementById('app');
    let groupLink = document.querySelectorAll('.group-title');
    let userCommunityRole;
    let groupId;
    let sendButton;

    let body = {
        tags: filters.tags || [],
        sorting: filters.sorting || '',
        page: 1,
        size: 5,
    };

    let urlMask = createUrl(body);

    groupLink.forEach(el => {
        el.addEventListener('click', async (event) => {
            groupId = event.target.id;
            try {
                userCommunityRole = await getUserRoleCommunityRequest(groupId, token);
            } catch (error) {
                userCommunityRole = null;
            }

            getInformationCommunityRequest(groupId).then(async (data) => {
                window.history.pushState({}, 'some title', `/communities/${groupId}`);
                mainBlock.innerHTML = '';
                await groupPage();
                await groupInfaHeader(data, userCommunityRole);
                data['administrators'].forEach(async (el) => {
                    await adminCommunityBlock(el);
                });
                await shortFilterBlock();

                let block = document.querySelector('.section-posts');
                let textBlock = document.createElement('p');
                textBlock.className += 'unauthorized-text';
                textBlock.textContent = 'Родной, ты не подписан на группу или не авторизован';

                if (token !== null && checkLifeCycle(token)) {
                    if ((userCommunityRole === null || userCommunityRole === undefined) && data['isClosed']) {
                        block.appendChild(textBlock);
                    } else {
                        await fetchPosts(urlMask, token, groupId, block);
                    }
                } else if ((token === null || !checkLifeCycle(token)) && data['isClosed']) {
                    block.appendChild(textBlock);
                } else {
                    await fetchPosts(urlMask, token, groupId, block);
                }

                subscribe();
                unSubscribe();
                openCreaterPost();
                sendButton = document.querySelector('.send-filter-button');

                sendButton.addEventListener('click', () => {
                    body = readFilterDatas(body);
                    urlMask = createUrl(body);

                    window.history.pushState({}, 'some title', `/communities/${groupId}?${urlMask}`);

                    fetchPosts(urlMask, token, groupId, block);
                });
            });
        });
    });

    window.addEventListener('popstate', () => {
        router();
    });
}

async function fetchPosts(urlMask, token, groupId, block) {
    getCommunityPostsRequest(urlMask, token, groupId).then(async data => {
        block.innerHTML = '';
        data['posts'].forEach(el => {
            post(el);
        });
        markPost();
        openConcretePost();
        openComments();
        await createWrapperBlock();
    });
}