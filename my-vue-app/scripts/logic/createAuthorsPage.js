import authorsCard from "../components/authorsCard/authorsCard";
import authorsPage from "../components/authorsPage/authorsPage";
import { authorListRequest } from "../requests/authorListRequest";

export async function createAuthorsPage(){
    let data;

    try {
        data = await authorListRequest();
    }
    catch{
        (error) => console.log(error)
        return;
    }

    authorsPage();

    data.forEach(async (card) => {
        await authorsCard(card);
    })
    
}