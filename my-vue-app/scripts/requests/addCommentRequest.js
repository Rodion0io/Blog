import { URL } from "../../constans";

export function addCommentRequest(token, postId, body){
    const NEW_URL = `${URL}post/${postId}/comment`;

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        'Accept': "application/json"
    };

    return fetch(NEW_URL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
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

//https://blog.kreosoft.space/api/post/9c140594-9fea-4e6f-ac8d-08dd141b62e2/comment
//https://blog.kreosoft.space/api/post/9c140594-9fea-4e6f-ac8d-08dd141b62e2/comment