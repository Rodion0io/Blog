import { getPostRequest } from "../requests/getPostsRequest";
import post from "../components/post/post";
import { createUrl } from "./createUrl";

export function getPosts(){
    // const NEW_URL = `${URL}post?onlyMyCommunities=${true}&page=${1}&size=${8}`;

    let sendButton = document.querySelector('.select-filters-button');

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

        body = {'tags': [], 'author': '', 'minTime': '', 'maxTime': '', 'sorting': '',
            'onlyMyCommunities': false, 'page': 1, 'size': 5};

        let tags = document.querySelector('.select-list');
        let author = document.getElementById('input-name');
        let minTime = document.getElementById('input-start-time');
        let maxTime = document.getElementById('input-end-time');
        let sorting = document.getElementById('input-sort');
        let onlyMyCommunities = document.getElementById('input-flag');
        // console.log(onlyMyCommunities.checked)
        // let page = document.getElementById('input-count-posts')
        let size = document.getElementById('input-count-post');

        for (let i = 0; i < tags.options.length; i++){
            let option = tags.options[i];
            if (option.selected){
                let obj = {'id': option.id, 'tagName': option}
                body['tags'].push(obj);
            }
        }

        body['author'] = author.value;
        body['minTime'] = minTime.value;
        body['maxTime'] = maxTime.value;
        body['sorting'] = sorting.value;
        body['onlyMyCommunities'] = onlyMyCommunities.checked;
        body['page'] = 1;
        body['size'] = size.value;

        // console.log(body);
        urlMask = createUrl(body);
        

        window.history.pushState({}, 'some title', `/${urlMask}`);

        getPostRequest(urlMask).then(data => {
            console.log(data);
            data['posts'].forEach(element => {
                post(element);
            });
            console.log(urlMask);
            // window.location.search = `/${urlMask}`;
        })
        
        
        // return result

        // return result;
    })
}