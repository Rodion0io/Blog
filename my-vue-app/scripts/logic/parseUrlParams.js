export function parseUrlParams(url) {
    const queryString = url.split('?')[1] || '';
    const params = new URLSearchParams(queryString);
    const result = {};

    for (const [key, value] of params.entries()) {
        if (key in result) {
            // Если ключ уже существует, преобразуем его в массив
            result[key] = Array.isArray(result[key]) ? [...result[key], value] : [result[key], value];
        } else {
            result[key] = value;
        }
    }

    return result;
}
