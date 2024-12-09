import { addressSearchRequest } from "../requests/addressSearchRequest";

export async function getAddressSearch(parentObjectId){
    let communityList;

    try {
        if (parentObjectId !== null || parentObjectId !== undefined){
            communityList = await addressSearchRequest(parentObjectId);
        }
        else{
            communityList = await addressSearchRequest();
        }
    }
    catch{
        (error) => {
            console.log(error);
            return;
        }
    }

    return communityList;
}