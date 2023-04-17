import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import StatusNav from "../../components/StatusNav/StatusNav";
import ListWishes from "../../components/ListWish/ListWish";

export default function Search(){
    const [wishSearch, setWishSearch] = useState(undefined);
    
    return(
        <div className='central-section__div'>
                 <SearchBar setWishSearch={setWishSearch}/> 
                 <StatusNav />
                 <ListWishes filterBy="title" filterValue={wishSearch} />
        </div>
    )
}