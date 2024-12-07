import group from "../components/group/group";
import { getCommunityRequest } from "../requests/getCommunityRequest";

export async function getCommunity(){
    let communityList;

    try {
        communityList = await getCommunityRequest();
    }
    catch{
        (error) => {
            console.log(error);
        }
    }

    communityList.forEach(currentGroup => {
        group(currentGroup);
    });
}