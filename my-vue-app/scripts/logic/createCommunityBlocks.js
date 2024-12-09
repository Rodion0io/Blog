import group from "../components/group/group";
import { getCommunityRequest } from "../requests/getCommunityRequest";

export async function createCommunityBlock(){
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

    communityList.forEach(currentGroup => {
        group(currentGroup);
    });
}