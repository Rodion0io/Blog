import { URL } from "../../constans";

const NEW_URL = `${URL}account/profile`;

export function getUserProfileRequest(token) {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        'Accept': "application/json"
    };

    return fetch(NEW_URL, {
        method: "GET",
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        return response.json().then(error => {
            const e = new Error('Увы!');
            e.data = error;
            throw e;
        });
    }).then(data => data)
    .catch(error => {
        console.error('error', error);
        throw error;
    });
}