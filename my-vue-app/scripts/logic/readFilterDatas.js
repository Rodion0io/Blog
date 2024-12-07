export function readFilterDatas(body){
    // let body = {'tags': [], 'author': '', 'minTime': '', 'maxTime': '', 'sorting': '',
    //         'onlyMyCommunities': false, 'page': 1, 'size': 5};

    let tags = document.querySelector('.select-list');
    let author = document.getElementById('input-name');
    let minTime = document.getElementById('input-start-time');
    let maxTime = document.getElementById('input-end-time');
    let sorting = document.getElementById('input-sort');
    let onlyMyCommunities = document.getElementById('input-flag');
    // let page = document.getElementById('input-count-posts')
    let size = document.getElementById('input-count-post');

    for (let i = 0; i < tags.options.length; i++){
        let option = tags.options[i];
        if (option.selected){
            let obj = {'id': option.id, 'tagName': option}
            body['tags'].push(obj);
        }
    }

    if (author){
        body['author'] = author.value;
    }
    if (minTime){
        body['minTime'] = minTime.value;
    }
    if (maxTime){
        body['maxTime'] = maxTime.value;
    }
    if (sorting){
        body['sorting'] = sorting.value;
    }
    if (onlyMyCommunities){
        body['onlyMyCommunities'] = onlyMyCommunities.checked;
    }
    if (body['page'] !== undefined || body['page'] !== null){
        body['page'] = 1;
    }
    if (size){
        body['size'] = size.value;
    }
    

    return body;
}