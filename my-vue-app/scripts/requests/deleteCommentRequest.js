import { URL } from "../../constans";

export function deleteCommentRequest(token, commentId){
    const NEW_URL = `${URL}comment/${commentId}`

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        'Accept': "application/json"
    };

    return fetch(NEW_URL, {
        method: "DELETE",
        headers: headers,
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

//https://blog.kreosoft.space/api/comment/4398feae-6b39-4e41-4bbf-08dd140b048e