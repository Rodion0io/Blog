import { getPostRequest } from "../requests/getPostsRequest";
import post from "../components/post/post";
import { createUrl } from "./createUrl";
import { readFilterDatas } from "./readFilterDatas";

export function getPosts(){
    document.querySelector('.section-posts').innerHTML = ''

    let sendButton = document.querySelector('.select-filters-button');
    let pageSizeList = document.getElementById('input-count-post');

    let body = {'tags': [], 'author': '', 'minTime': '', 'maxTime': '', 'sorting': '',
            'onlyMyCommunities': false, 'page': 1, 'size': 5};

    let urlMask = createUrl(body)

    getPostRequest(urlMask).then(data => {
        // console.log(data);
        console.log(urlMask);
        data['posts'].forEach(element => {
            post(element);
        });
    })
    
    sendButton.addEventListener('click', () => {
        body = readFilterDatas(body);
        urlMask = createUrl(body);

        window.history.pushState({}, 'some title', `/${urlMask}`);

        document.querySelector('.section-posts').innerHTML = ''

        getPostRequest(urlMask).then(data => {
            console.log(data);
            data['posts'].forEach(element => {
                post(element);
            });
            console.log(urlMask);
            // window.location.search = `/${urlMask}`;
        })
    })

    pageSizeList.addEventListener('change', () => {
        body = readFilterDatas(body);
        urlMask = createUrl(body);

        window.history.pushState({}, 'some title', `/${urlMask}`);

        document.querySelector('.section-posts').innerHTML = ''

        getPostRequest(urlMask).then(data => {
            console.log(data);
            data['posts'].forEach(element => {
                post(element);
            });
            console.log(urlMask);
            // window.location.search = `/${urlMask}`;
        })
    })
}