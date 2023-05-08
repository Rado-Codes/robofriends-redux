
export const callApi = (url) => {
    return fetch(url)
        .then(response => response.json())
}
