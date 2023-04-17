import useWishContext from '../../../context/WishContext';
import './SearchBar.css';

export default function SearchBar({ setWishSearch }) {
    const [wishlist, setWishlist] = useWishContext();

    
    return (
        <div className="add-wish__div">
            <form>
                <input type="text" name="wishTitle" placeholder='🔍 Search a task' />
            </form>
        </div>
    )
}