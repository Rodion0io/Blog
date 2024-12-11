import { getPostRequest } from "../requests/getPostsRequest";
import post from "../components/post/post";
import { createUrl } from "./createUrl";
import { readFilterDatas } from "./readFilterDatas";
import { markPost } from "./markPost";
import { openConcretePost } from "./openConcretPost";
import router from "./router";

export function getPosts(currentPage = 1, pageSize = 5, groupSize = 3, filters = {}, nameAuthor = null) {

    if (document.querySelector('.section-posts') !== undefined){
        document.querySelector('.section-posts').innerHTML = '';    
    }
    

    let token = localStorage.getItem('token');

    let sendButton = document.querySelector('.select-filters-button');
    let pageSizeList = document.getElementById('input-count-post');

    // Заполняем тело запроса из filters
    let body = {
        tags: filters.tags || [],
        author: filters.authorName || '' || nameAuthor ? nameAuthor !== null : '',
        minTime: filters.minTime || '',
        maxTime: filters.maxTime || '',
        sorting: filters.sorting || '',
        onlyMyCommunities: filters.onlyMyCommunities || false,
        page: currentPage,
        size: pageSize,
    };

    // console.log(body);

    let urlMask = createUrl(body);

    window.addEventListener('popstate', () => {
        router();
    });

    // Запрос постов
    getPostRequest(urlMask, token).then(data => {
        document.querySelector('.section-posts').innerHTML = '';
        data['posts'].forEach(element => {
            post(element);
        });
        markPost();
        openConcretePost();
    });



    // Обработчики событий
    sendButton.addEventListener('click', () => {
        body = readFilterDatas(body);
        urlMask = createUrl(body);

        console.log(body);
        console.log(urlMask);

        // Обновляем URL
        window.history.pushState({}, 'some title', `/?${urlMask}`);

        getPostRequest(urlMask, token).then(data => {
            document.querySelector('.section-posts').innerHTML = '';
            data['posts'].forEach(element => {
                post(element);
            });
            markPost();
            openConcretePost();
        });
    });

    pageSizeList.addEventListener('change', () => {
        body.page = 1;
        body = readFilterDatas(body);
        urlMask = createUrl(body);

        // Обновляем URL
        window.history.pushState({}, 'some title', `/?${urlMask}`);

        getPostRequest(urlMask, token).then(data => {
            document.querySelector('.section-posts').innerHTML = '';
            data['posts'].forEach(element => {
                post(element);
            });
            markPost();
            openConcretePost();
        });
    });

    // Пагинация
    document.querySelectorAll('.pagination-item').forEach(el => {
        el.addEventListener('click', (event) => {
            if (event.target.classList.contains('left-item')) {
                body.page = Math.max(1, body.page - 1);
            } else if (event.target.classList.contains('right-item')) {
                body.page = Math.min(Math.ceil(data.totalCount / body.size), body.page + 1);
            } else if (event.target.id) {
                body.page = parseInt(event.target.id);
            }
            urlMask = createUrl(body);
            getPostRequest(urlMask, token).then(data => {
                document.querySelector('.section-posts').innerHTML = '';
                data['posts'].forEach(element => {
                    post(element);
                });
                markPost();
                openConcretePost();
            });
        });
    });
}
