import { URL } from "../../constans";

export function getCommunityPostsRequest(maskUrl, token, groupId){
    const headers = {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${token}`,
    };

    if (token !== null){
        headers["Authorization"] = `Bearer ${token}`
    }

    // console.log(groupId);

    const NEW_URL = `${URL}community/${groupId}/post?${maskUrl}`;

    console.log(NEW_URL);

    return fetch(NEW_URL, {
        method: "GET",
        headers: headers,
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