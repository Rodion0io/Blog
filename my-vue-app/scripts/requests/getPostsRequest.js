import { URL } from "../../constans";

export function getUserProfileRequest(body, maskUrl) {
    const headers = {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${token}`,
    };

    const NEW_URL = `${URL}${maskUrl}`;

    return fetch(NEW_URL, {
        method: "GET",
        headers: headers,
        body: JSON.stringify(body)
    }).then(response => {
        console.log(response);
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