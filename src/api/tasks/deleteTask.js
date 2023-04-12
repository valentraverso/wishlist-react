const deleteTask = async (token, id) => {
    try{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/task/delete/id/${id}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const json = await response.json();

        return{
            status: "TRUE",
            msg: "Task deleted.",
            data: json
        }
    }catch(err){
        return ({
            status: "FALSE",
            msg: "We have a problem while updating the task.",
        })
    }
}

export {deleteTask};