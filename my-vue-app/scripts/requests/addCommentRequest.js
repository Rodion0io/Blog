import { URL } from "../../constans";

export function addCommentRequest(postId, token, body){
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    const NEW_URL = `${URL}post/${postId}/comment`;

    return fetch(NEW_URL, {
        method: "POST",
        headers: headers,
        body: body,
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