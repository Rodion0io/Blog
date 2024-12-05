import { URL } from "../../constans";

export function treeCommentRequest(parentCommentId) {
    const headers = {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${token}`,
    };

    const NEW_URL = `${URL}comment/${parentCommentId}/tree`;

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

//https://blog.kreosoft.space/api/comment/ea2539a2-98b4-46c4-4bf5-08dd140b048e/tree