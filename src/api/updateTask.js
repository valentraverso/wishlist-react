const updateTask = async (token, idTask, update = undefined) => {
    const formData = new FormData();

    if(update === undefined){
        return{
            status: "FALSE",
            msg: "Please add data to update."
        }
    }

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
            msg: "Register update.",
            data: json
        }
    } catch (err) {
        return ({
            status: "FALSE",
            msg: "We have a problem while updating the task.",
            log: err
        })
    }
}

export { updateTask };