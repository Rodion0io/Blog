import { getPostRequest } from "../requests/getPostsRequest";
import post from "../components/post/post";
import { createUrl } from "./createUrl";
import { readFilterDatas } from "./readFilterDatas";
import { markPost } from "./markPost";
import { openConcretePost } from "./openConcretPost";
import router from "./router";
import { createWrapperBlock } from "./createWrapperBlock";
import { openComments } from "./openComment";
import paginationBar from "../components/paginationBar/pagintaionBar";

export function getPosts(currentPage = 1, filters = {}, nameAuthor = null) {
    
    if (document.querySelector('.section-posts') !== undefined) {
        document.querySelector('.section-posts').innerHTML = '';
    }

    let token = localStorage.getItem('token');

    let sendButton = document.querySelector('.select-filters-button');

    let body = {
        tags: filters.tags || [],
        author: filters.authorName || '' || nameAuthor ? nameAuthor !== null : '',
        minTime: filters.minTime || '',
        maxTime: filters.maxTime || '',
        sorting: filters.sorting || '',
        onlyMyCommunities: filters.onlyMyCommunities || false,
        page: currentPage || 1,
        size: filters.size || 5,
    };

    let urlMask = createUrl(body);

    window.addEventListener('popstate', () => {
        router();
    });

    
    getPostRequest(urlMask, token).then(async data => {
        document.querySelector('.section-posts').innerHTML = '';
        data['posts'].forEach(element => {
            post(element);
        });
        markPost();
        openConcretePost();
        openComments();

        
        paginationBar(data['pagination'].current, 3, data['pagination'].count);

        
        addPaginationListeners(body, urlMask, token, data.totalCount);

        await createWrapperBlock();
    });

    
    sendButton.addEventListener('click', () => {
        body = readFilterDatas(body);
        urlMask = createUrl(body);

        
        window.history.pushState({}, 'some title', `/?${urlMask}`);

        getPostRequest(urlMask, token).then(async data => {
            document.querySelector('.section-posts').innerHTML = '';
            data['posts'].forEach(element => {
                post(element);
            });
            markPost();
            openConcretePost();
            openComments();

            
            paginationBar(data['pagination'].current, 3, data['pagination'].count);

            
            addPaginationListeners(body, urlMask, token, data.totalCount);

            await createWrapperBlock();
        });
    });

    document.getElementById('input-count-post').addEventListener('change', () => {
        body.page = 1;
        body = readFilterDatas(body);
        urlMask = createUrl(body);

        
        window.history.pushState({}, 'some title', `/?${urlMask}`);

        getPostRequest(urlMask, token).then(async data => {
            document.querySelector('.section-posts').innerHTML = '';
            data['posts'].forEach(element => {
                post(element);
            });
            markPost();
            openConcretePost();
            openComments();

            
            paginationBar(data['pagination'].current, 3, data['pagination'].count);

            
            addPaginationListeners(body, urlMask, token, data.totalCount);

            await createWrapperBlock();
        });
    });
}


function addPaginationListeners(body, urlMask, token, totalCount) {
    document.querySelectorAll('.pagination-item').forEach(el => {
        el.addEventListener('click', (event) => {
            if (event.target.classList.contains('left-item')) {
                
                body.page = Math.max(1, body.page - 1);
            } else if (event.target.classList.contains('right-item')) {
                
                body.page = Math.min(Math.ceil(totalCount / body.size), body.page + 1);
            } else if (event.target.id) {
                
                body.page = parseInt(event.target.id);
            }

            
            urlMask = createUrl(body);
            window.history.pushState({}, 'some title', `/?${urlMask}`);
            getPostRequest(urlMask, token).then(async data => {
                document.querySelector('.section-posts').innerHTML = '';
                data['posts'].forEach(element => {
                    post(element);
                });
                markPost();
                openConcretePost();
                openComments();

                // Вызываем пагинацию
                paginationBar(data['pagination'].current, 3, data['pagination'].count);

                
                addPaginationListeners(body, urlMask, token, data.totalCount);

                await createWrapperBlock();
            });
        });
    });
}