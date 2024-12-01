export function createUrl(body){

    let parts = [];

    if (body['tags'].length !== 0){
        parts.push(body['tags'].map(tag => `tags=${tag.id}`).join('&'));
    }
    if (body['author'] !== ''){
        parts.push(`author=${body['author']}`);
    }
    if (body['minTime'] !== ''){
        parts.push(`min=${body['minTime']}`);
    }
    if (body['maxTime'] !== ''){
        parts.push(`max=${body['maxTime']}`);
    }
    if (body['sorting'] !== ''){
        parts.push(`sorting=${body['sorting']}`);
    }
    parts.push(`onlyMyCommunities=${body['onlyMyCommunities']}`);
    parts.push(`page=${body['page']}`);
    parts.push(`size=${body['size']}`);


    // let pagePart = body['page'] !== null ? `page=${body['page']}` : '';

    let urlMask = parts.join('&');
    return urlMask;
}