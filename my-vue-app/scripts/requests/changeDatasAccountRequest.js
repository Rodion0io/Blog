import { URL } from "../../constans";

const NEW_URL = `${URL}account/profile`;

export function changeDatasAccountRequest(body, token){
    
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    console.log(body);
    console.log(token);

    return fetch(NEW_URL, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(body),
    }).then(response => {
        if (response.ok){
            return;
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