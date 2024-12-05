import { URL } from "../../constans";

export function getInformationCommunityRequest(groupId, token) {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    const NEW_URL = `${URL}community/${groupId}`;

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

// https://blog.kreosoft.space/api/community/c5639aab-3a25-4efc-17e1-08dbea521a96