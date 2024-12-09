import { URL } from "../../constans";

const NEW_URL = `${URL}post`;

export function addPostRequest(token, body){
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    console.log("dfjgidfkbgksdg", body);

    return fetch(NEW_URL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    }).then(response => {
        if (response.ok){
            return response.json();
        }
        else{
            return response.json()
        }
    })
    .then(data => data)
    .catch(error => {error;
         throw error});
}

//https://blog.kreosoft.space/api/address/search?parentObjectId=1281271