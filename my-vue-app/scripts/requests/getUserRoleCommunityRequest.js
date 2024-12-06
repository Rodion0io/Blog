import { URL } from "../../constans";
export function getUserRoleCommunityRequest(id, token){

    const NEW_URL = `${URL}community/${id}/role`;

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        'Accept': "application/json"
    };

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
};

//https://blog.kreosoft.space/api/community/21db62c6-a964-45c1-17e0-08dbea521a96/role