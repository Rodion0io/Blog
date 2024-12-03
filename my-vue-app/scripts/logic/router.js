import AuthorizeForm from "../components/authorize/authorizeForm";
import registrationForm from "../components/registration/registrationForm";
import { sendDatas } from "./enterAccount";
import { registrationAccount } from "./registrationAccount"
import Profile from "../components/profile/profile";
import listAccount from "../components/listAccount/listAccount";
import { getUserProfile } from "./getUserProfile";
import filter from "../components/filter/filter";
import mainPage from "../components/mainPage/mainPage";
import createMainPage from "./createMainPage";
import { markPost } from "./markPost";
import { getPosts } from "./getPosts";
import { parseUrlParams } from "./parseUrlParams"; // Вспомогательная функция для парсинга URL

function router() {
    let pathLink = window.location.pathname; // Учитываем query параметры
    let parentBlock = document.getElementById('app');

    // временные значения для mainPage
    const currentPage = 1;
    const totalPages = 10;
    const groupSize = 3;

    // Навигация по ссылкам
    document.querySelectorAll('.href').forEach(link => 
        link.addEventListener('click', (event) => {
            event.preventDefault();

            let path = event.target.href;

            window.history.pushState({ route: path }, 'some title', path);
            router();
        })
    );

    // Попытка вернуть состояние при возврате назад
    window.addEventListener('popstate', (event) => {
        if (event.state) {
            router();
        }
    });

    // Роутинг
    if (pathLink.startsWith('/?')) {
        // Получаем параметры из URL
        const params = parseUrlParams(pathLink);
        parentBlock.innerHTML = '';
        mainPage(params.page || currentPage, totalPages, groupSize);
        filter(params); // Передаем параметры в фильтр
        getPosts(params.page || currentPage, params.size || 5, groupSize, params); // Передаем параметры
        listAccount(null);
    } else {
        switch (pathLink) {
            case '/':
                parentBlock.innerHTML = '';
                mainPage(currentPage, totalPages, groupSize);
                filter();
                getPosts();
                listAccount(null);
                break;
            case '/login':
                parentBlock.innerHTML = '';
                AuthorizeForm();
                sendDatas();
                break;
            case '/registration':
                parentBlock.innerHTML = '';
                registrationForm();
                registrationAccount();
                break;
            case '/profile':
                parentBlock.innerHTML = '';
                Profile();
                getUserProfile();
                listAccount(null);
                break;
        }
    }
}

export default router;
