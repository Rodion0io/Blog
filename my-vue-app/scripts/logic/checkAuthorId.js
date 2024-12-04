import { getUserProfileRequest } from "../requests/getUserProfileRequest";

export async function checkAuthorId(authorId){
    let token = localStorage.getItem('token');

    if (token === null){
        // console.log(false);
        return false;
    }
    else{
        try {
            let data = await getUserProfileRequest(token);
            let userId = data['id'];
            // console.log(userId === authorId)
            return userId === authorId;
        }
        catch{
            // console.log(false);
            return false;
        }
    }
}