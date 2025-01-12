import { URL } from "../../constans";

const NEW_URL = `${URL}account/logout`;

export function logoutRequest(token){
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    return fetch(NEW_URL, {
        method: "POST",
        headers: headers,
    }).then(response => {
        if (response.ok){
            return response.json();
        }
        else{
            return response.json().then(error => {
                throw new Error(error.message || "что-то пошло не так!");
            })
        }
    }).then(data => data)
    .catch(error => {error;
         throw error});
}