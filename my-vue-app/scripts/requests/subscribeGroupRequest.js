import { URL } from "../../constans";


export function subscribeGroupRequest(token, groupId) {
    const NEW_URL = `${URL}community/${groupId}/subscribe`;

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        'Accept': "application/json"
    };

    return fetch(NEW_URL, {
        method: "POST",
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

//https://blog.kreosoft.space/api/community/21db62c6-a964-45c1-17e0-08dbea521a96/subscribe