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
        // console.log(response.json());
        // let error = new Error(response.statusText);
        // error.response = response;
        // throw error;
    })
    .then(data => data)
    .catch(error => {error;
         throw error});
    // .catch((e) => {
    //     console.log('Error: ' + e.message);
    //         console.log(e.response);
    // })
}