import { URL } from "../../constans";

export function addPostInCommunityRequest(communityId, token, body){
    
    const NEW_URL = `${URL}community/${communityId}/post`;

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };

    return fetch(NEW_URL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    }).then(response => {
        if (response.ok){
            return response.json();
        }
        else{
            return response.json().then(err => {
                throw new Error(err.message || 'Что-то пошло не так');
              });
        }
    })
    .then(data => data)
    .catch(error => {error;
         throw error});
}