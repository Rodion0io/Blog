export function readFilterDatas(body) {
    let tags = document.querySelector('.select-list');
    let author = document.getElementById('input-name');
    let minTime = document.getElementById('input-start-time');
    let maxTime = document.getElementById('input-end-time');
    let sorting = document.getElementById('input-sort');
    let onlyMyCommunities = document.getElementById('input-flag');
    let size = document.getElementById('input-count-post');

    console.log(size)

    const previousTags = body['tags'] || [];

    body['tags'] = [];
    let modifySortText;


    for (let i = 0; i < tags.options.length; i++) {
        let option = tags.options[i];
        if (option.selected) {
            let obj = { 'id': option.id, 'tagName': option.value };
            body['tags'].push(obj);
        }
    }

    const deselectedTags = previousTags.filter(tag => !body['tags'].some(t => t.id === tag.id));
    if (deselectedTags.length > 0) {
        console.log(deselectedTags);
    }

    console.log(sorting.value);

    switch (sorting.value){
        case 'По дате создания (сначала новые)':
            modifySortText = 'CreateDesc';
            break;
        case 'По дате создания (сначала старые)':
            modifySortText = 'CreateAsc';
            break;
        case 'По количеству лайков (по убыванию)':
            modifySortText = 'LikeDesc';
            break;
        case 'По количеству лайков (по возрастанию)':
            modifySortText = 'LikeAsc';
            break;
    }

    console.log(modifySortText);


    if (author) {
        body['author'] = author.value;
    }
    if (minTime) {
        body['minTime'] = minTime.value;
    }
    if (maxTime) {
        body['maxTime'] = maxTime.value;
    }
    if (sorting) {
        body['sorting'] = modifySortText;
    }
    if (onlyMyCommunities) {
        body['onlyMyCommunities'] = onlyMyCommunities.checked;
    }
    if (body['page'] !== undefined || body['page'] !== null) {
        body['page'] = 1;
    }
    if (size) {
        body['size'] = size.value;
    }

    return body;
}