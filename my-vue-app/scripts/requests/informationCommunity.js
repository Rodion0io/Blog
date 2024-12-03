import { URL } from "../../constans";

export function informationCommunity(postId) {
    const headers = {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${token}`,
    };

    const NEW_URL = `${URL}community/${postId}`;

    return fetch(NEW_URL, {
        method: "GET",
        headers: headers
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