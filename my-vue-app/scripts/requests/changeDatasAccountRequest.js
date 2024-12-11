import { URL } from "../../constans";

const NEW_URL = `${URL}account/profile`;

export function changeDatasAccountRequest(body){
    const headers = {
        "Content-Type": "application/json"
    };

    return fetch(NEW_URL, {
        method: 'GET',
        headers: headers,
        body: JSON.stringify(body),
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

//https://blog.kreosoft.space/api/account/profile