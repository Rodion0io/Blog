import { URL } from "../../constans.js";


const NEW_URL = `${URL}account/login`;

export function authorizeRequest(datas){
    const headers = {
        "Content-Type": "application/json"
    };

    return fetch(NEW_URL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(datas)
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