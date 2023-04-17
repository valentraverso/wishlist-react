import useWishContext from '../../../context/WishContext'; 
import './SearchBar.css';

export default function SearchBar(){
    const [wishlist, setWishlist] = useWishContext();

    console.log(wishlist)
    return(
        <div className="add-wish__div">
            <form>
                <input type="text" name="wishTitle"  placeholder='🖊️ Walk the dog' />
            </form>
        </div>
    )
}