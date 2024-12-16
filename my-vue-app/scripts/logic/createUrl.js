export function createUrl(body){

    let parts = [];

    if (body['tags'].length !== 0 && body['tags'] !== undefined){
        parts.push(body['tags'].map(tag => `tags=${tag.id}`).join('&'));
    }
    if (body['author'] !== '' && body['author'] !== undefined){
        parts.push(`author=${body['author']}`);
    }
    if (body['minTime'] !== '' && body['minTime'] !== undefined){
        parts.push(`min=${body['minTime']}`);
    }
    if (body['maxTime'] !== '' && body['maxTime'] !== undefined){
        parts.push(`max=${body['maxTime']}`);
    }
    if (body['sorting'] !== '' && body['sorting'] !== undefined){
        parts.push(`sorting=${body['sorting']}`);
    }
    if (body['onlyMyCommunities'] !== null && body['onlyMyCommunities'] !== undefined){
        parts.push(`onlyMyCommunities=${body['onlyMyCommunities']}`);
    }
    parts.push(`page=${body['page']}`);
    parts.push(`size=${body['size']}`);



    let urlMask = `${parts.join('&')}`;
    return urlMask;
}