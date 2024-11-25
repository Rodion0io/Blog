export function checkLifeCycle(jwt){
    let tokenParts = jwt['token'].split('.');
    let decodePayload = JSON.parse(atob(tokenParts[1]));
    let dethTokenTime = decodePayload['exp'];
    let currentTimeOnSeconds = Math.floor(Date.now() / 1000);

    if (currentTimeOnSeconds >= dethTokenTime){
        return true;
    }
    else{
        console.log('еще работает')
        return false;
    }
}