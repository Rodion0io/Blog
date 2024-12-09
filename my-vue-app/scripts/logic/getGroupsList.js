import { getCommunityRequest } from "../requests/getCommunityRequest";

export async function getGruopsList(){
    let communityList;

    try {
        communityList = await getCommunityRequest();
    }
    catch{
        (error) => {
            console.log(error);
            return;
        }
    }

    return communityList;
}