const postTask = async (title, token) => {
    try{
        const options = {
            method: 'POST',
            headers: { 
                'Content-type': 'application/json',
                 Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(title)
        }
        
        const response = await fetch(`${import.meta.env.VITE_API_URL}/task/upload`, options);
        const {data} = await response.json();

        return {
            status: "TRUE",
            msg: "Task upload",
            data
        };
    }catch(err){
        return{
            status: "FALSE",
            msg: "There was an error creating a task."
        }
        throw new Error('There was an error creating a task.')
    }
}

export default postTask;