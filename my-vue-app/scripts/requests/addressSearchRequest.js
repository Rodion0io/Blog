import { URL } from "../../constans";

export function addressSearchRequest(parentObjectId){
    const NEW_URL = `${URL}address/search${parentObjectId === null || parentObjectId === undefined
         ? '' : `?parentObjectId=${parentObjectId}`}`;

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

//https://blog.kreosoft.space/api/address/search?parentObjectId=1281271