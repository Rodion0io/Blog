import { URL } from "../../constans";

const NEW_URL = `${URL}author/list`;

export function authorListRequest(){
    const headers = {
        "Content-Type": "application/json"
    };

    return fetch(NEW_URL, {
        method: 'GET',
        headers: headers,
    }).then(response => {
        if (response.ok){
            return response.json();
        }
        else{
            return response.json().then(err => {
                throw new Error(err.message || 'Что-то пошло не так');
              });
        }
    })
    .then(data => data)
    .catch(error => {error;
         throw error});
}