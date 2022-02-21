export const FetchOptions = (requestMethod, data) => {
    const token = localStorage.getItem('bk_token')

    const fetchOptions = {
        method: requestMethod,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        }
    }
    if (!requestMethod) {
        fetchOptions.method = "GET"
    }
    else if (requestMethod === "LOGIN") {
        fetchOptions.method = "POST"
        fetchOptions.body = JSON.stringify({
            username: data.username,
            password: data.password
        })
    }
    else if (requestMethod === "POST") {
        fetchOptions.method = "POST"
        fetchOptions.body = JSON.stringify(data)
    }

    return fetchOptions
}