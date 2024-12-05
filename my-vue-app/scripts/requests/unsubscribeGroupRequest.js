import { URL } from "../../constans";


export function unSubscribeGroupRequest(token, groupId) {
    
    const NEW_URL = `${URL}community/${groupId}/unsubscribe`;

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


// https://blog.kreosoft.space/api/community/3fa85f64-5717-4562-b3fc-2c963f66afa6/unsubscribe