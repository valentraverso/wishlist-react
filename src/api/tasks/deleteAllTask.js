const deleteAllTask = async (token) => {
    try{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/task/delete/all`, 
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const json = await response.json();

        return {
            status: "TRUE",
            msg: "Register update.",
            data: json
        }
    }catch(err){
        return ({
            status: "FALSE",
            msg: "We have a problem while updating the task."
        })
    }
}

export {deleteAllTask}