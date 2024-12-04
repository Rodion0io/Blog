import { URL } from "../../constans";

export function redactCommentRequest(token, commentId, body){
    const NEW_URL = `${URL}comment/${commentId}`;

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        'Accept': "application/json"
    };

    return fetch(NEW_URL, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(body),
    }).then(response => {
        if (response.ok) {
            return null
        }
        return response.json().then(error => {
            const e = new Error(error.message);
            e.data = error;
            throw e;
        });
    }).then(data => data)
    .catch(error => {
        console.error('error', error);
        throw error;
    });
}

//https://blog.kreosoft.space/api/comment/60e643fb-ed3e-4b6c-4be4-08dd140b048e