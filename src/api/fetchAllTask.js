const fetchAllProducts = async () => {
    try{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/task`)
        const json = await response.json();

        return json;
    }catch(err){
        throw new Error(`There was an error.`)
    }
}

export default fetchAllProducts;