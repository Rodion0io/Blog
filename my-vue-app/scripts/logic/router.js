import AuthorizeForm from "../components/authorize/authorizeForm";
import registrationForm from "../components/registration/registrationForm";
import { sendDatas } from "./enterAccount";
import { registrationAccount } from "./registrationAccount";
import Profile from "../components/profile/profile";
import listAccount from "../components/listAccount/listAccount";
import { getUserProfile } from "./getUserProfile";
import filter from "../components/filter/filter";
import mainPage from "../components/mainPage/mainPage";
import { getPosts } from "./getPosts";
import { parseUrlParams } from "./parseUrlParams";
import listGroups from "../components/listGroups/listGroups";
import { createCommunityBlock } from "./createCommunityBlocks";
import { getUserCommunity } from "./getUserCommunity";
import { subscribe } from "./subscribe";
import { unSubscribe } from "./unsubscribe";
import { getInformationCommunity } from "./getInformationCommunity";
import createPostForm from "../components/createPostForm/createPostForm";
import { loadInputAddress } from "./loadInputAddress";
import { sendPost } from "./SendPost";
import { openCreaterPost } from "./openCreaterPost";
import { createAuthorsPage } from "./createAuthorsPage";
import { changeDatasAccount } from "./changeDatasAccount";

let hrefHandlersAdded = false;

async function router() {
    let pathLink = window.location.pathname;
    let parentBlock = document.getElementById('app');

    
    parentBlock.innerHTML = '';

    // Временные значения для mainPage
    const currentPage = 1;
    const totalPages = 10;
    const groupSize = 3;

    
    if (!hrefHandlersAdded) {
        document.querySelectorAll('.href').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                let path = event.target.href;
                window.history.pushState({ route: path }, 'some title', path);
                router();
            });
        });
        hrefHandlersAdded = true;
    }

    
    window.addEventListener('popstate', (event) => {
        if (event.state) {
            router();
        }
    });

    
    if (pathLink.startsWith('/?')) {
        const params = parseUrlParams(pathLink);
        mainPage(params.page || currentPage, totalPages, groupSize);
        filter(params);
        getPosts(params.page || currentPage, params.size || 5, groupSize, params);
        listAccount(null);
    } else {
        switch (pathLink) {
            case '/':
                mainPage(currentPage, totalPages, groupSize);
                filter();
                getPosts();
                listAccount("email@mail.ru"); // Заглушка
                openCreaterPost();
                break;
            case '/login':
                AuthorizeForm();
                sendDatas();
                break;
            case '/registration':
                registrationForm();
                registrationAccount();
                break;
            case '/profile':
                Profile();
                getUserProfile();
                listAccount("email@mail.ru"); // Заглушка
                changeDatasAccount();
                break;
            case '/communities':
                listGroups();
                await createCommunityBlock();
                await getUserCommunity();
                subscribe();
                unSubscribe();
                getInformationCommunity();
                break;
            case '/post/create':
                await createPostForm();
                loadInputAddress();
                await sendPost();
                break;
            case '/authors':
                createAuthorsPage();
                break;
        }
    }
}

export default router;