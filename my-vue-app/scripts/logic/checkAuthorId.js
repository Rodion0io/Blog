import { getUserProfileRequest } from "../requests/getUserProfileRequest";

export async function checkAuthorId(authorId){
    let token = localStorage.getItem('token');

    if (token === null){
        return false;
    }
    else{
        try {
            let data = await getUserProfileRequest(token);
            let userId = data['id'];
            return userId === authorId;
        }
        catch{
            return false;
        }
    }
}