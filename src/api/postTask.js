const postTask = async (title) => {
    try{
        const options = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(title)
        }
        
        const response = await fetch(`${import.meta.env.VITE_API_URL}/task`, options);
        const json = await response.json();

        return json;
    }catch(err){
        throw new Error('There was an error creating a task.')
    }
}

export default postTask;