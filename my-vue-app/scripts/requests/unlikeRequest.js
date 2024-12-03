import { URL } from "../../constans";


export function unlikeRequest(token, postId) {
    
    const NEW_URL = `${URL}post/${postId}/like`;

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    return fetch(NEW_URL, {
        method: "DELETE",
        headers: headers
    }).then(response => {
        if (response.ok) {
            console.log('ok')
            return null;
            
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