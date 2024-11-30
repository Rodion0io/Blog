import { getUserProfileRequest } from "../requests/getPostsRequest";

export function getPosts(){
    // const NEW_URL = `${URL}post?onlyMyCommunities=${true}&page=${1}&size=${8}`;

    let sendButton = document.querySelector('.select-filters-button');
    
    // sendButton.addEventListener('click', () => {

        let body = {'tags': [], 'author': null, 'minTime': null, 'maxTime': null, 'sorting': null,
            'onlyMyCommunities': false, 'page': 1, 'size': 5};

        let urlMask = '';

        let tags = document.querySelector('.select-list');
        let author = document.getElementById('input-name');
        let minTime = document.getElementById('input-start-time');
        let maxTime = document.getElementById('input-end-time');
        let sorting = document.getElementById('input-sort');
        let onlyMyCommunities = document.getElementById('input-flag');
        // console.log(onlyMyCommunities.checked)
        // let page = document.getElementById('input-count-posts')
        let size = document.getElementById('input-count-post');


        // page временно, добавим везде его и поменяем тута
        urlMask = `post?onlyMyCommunities=${onlyMyCommunities}&page=${1}&size=${size}`

        for (let i = 0; i < tags.options.length; i++){
            let option = a.options[i];
            if (option.selected){
                body['tags'].push(option);
                
            }
        }

        body['author'] = author.value;
        body['minTime'] = minTime.value;
        body['maxTime'] = maxTime.value;
        body['sorting'] = sorting.value;
        body['onlyMyCommunities'] = onlyMyCommunities.checked;
        body['size'] = size.value;

        getUserProfileRequest(body, urlMask).then(data => console.log(data));

        // return result;
    // })
}