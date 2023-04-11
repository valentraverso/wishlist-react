const fetchAllTask = async (token) => {
    try {
        const options = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await fetch(`${import.meta.env.VITE_API_URL}/task/all`, options)
        const json = await response.json();

        return json;
    } catch (err) {
        throw new Error(`There was an error.`)
    }
}

export { fetchAllTask };