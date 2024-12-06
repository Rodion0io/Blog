import { checkLifeCycle } from "./checkLifeCycle";
import { getInformationCommunityRequest } from "../requests/getInformationCommunityRequest";
import groupInfaHeader from "../components/groupInfaHeader/groupInfaHeader";
import adminCommunityBlock from "../components/adminCommunityBlock/adminCommunityBlock";
import groupPage from "../components/groupPage/groupPage";

export function getInformationCommunity(){
    let mainBlock = document.getElementById('app');
    let groupLink = document.querySelectorAll('.group-title');

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
                    })
                    
                }
            )
        })
    })
}