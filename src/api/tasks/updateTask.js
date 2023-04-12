const updateTask = async (token, idTask, update = undefined) => {



    try {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(update)
        }
        const response = await fetch(`${import.meta.env.VITE_API_URL}/task/update/${idTask}`, options);
        const json = await response.json();

        return {
            status: "TRUE",
            msg: "Task updated.",
            data: json
        }
    } catch (err) {
        return ({
            status: "FALSE",
            msg: err
        })
    }
}

export { updateTask };