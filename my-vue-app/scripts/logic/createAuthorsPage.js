import authorsCard from "../components/authorsCard/authorsCard";
import authorsPage from "../components/authorsPage/authorsPage";
import { authorListRequest } from "../requests/authorListRequest";
import { CalculateRatingAuthors } from "./CalculateRatingAuthors";
import { getAuthorsPost } from "./getAuthorsPost";

export async function createAuthorsPage(){
    await authorListRequest().then((data) => {
        
        authorsPage();
        data.forEach(el => {
            el['rating'] = CalculateRatingAuthors(el['likes'], el['posts']);
        })
        const mostActiveAuthors = data.sort((a,b) => a['rating'] < b['rating'] ? 1 : -1);

        mostActiveAuthors[0]['first'] = true;
        mostActiveAuthors[1]['second'] = true;
        mostActiveAuthors[2]['third'] = true;

        const sorted = mostActiveAuthors.sort((a, b) => a['fullName'] > b['fullName'] ? 1 : -1);

        // console.log(sorted);

        for (const card of sorted){
            authorsCard(card);
        }
    }).catch(error => console.log(error));

    getAuthorsPost();
    // let data = null;

    // try {
        
    //     data = await authorListRequest();
    //     await authorsPage();

    //     for (const card of data) {
    //         await authorsCard(card);
    // }
    // }
    // catch{
    //     (error) => console.log(error)
    //     return;
    // }

    
    
}