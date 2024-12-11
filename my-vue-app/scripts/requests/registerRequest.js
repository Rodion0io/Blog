import { URL } from "../../constans";

const NEW_URL = `${URL}account/register`;

export function registerRequest(datas) {
    const headers = {
        "Content-Type": "application/json"
    };

    return fetch(NEW_URL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(datas)
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return response.json().then(errorData => {
                throw new Error(JSON.stringify(errorData.errors, null, 2));
            });
        }
    }).then(data => data);
}