import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import StatusNav from "../../components/StatusNav/StatusNav";

export default function Search(){
    const [wishSearch, setWishSearch] = useState([]);
    
    return(
        <div className='central-section__div'>
                 <SearchBar /> 
                 <StatusNav />
        </div>
    )
}