import { useState } from "react";
import useWishContext from "../../../context/WishContext";
import { localStorage, addWish } from "../../../utils/utils";
import './AddWish.css';

export default function AddWish() {
    const [wishTitle, setWishTitle] = useState('');
    const [wishList, setWishList] = useWishContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (wishTitle === null || wishTitle === '') {
            alert('Must fill the input with text!');
        }

        addWish(wishTitle);
        setWishTitle('');
        setWishList(JSON.parse(localStorage.getItem("wish-list")));
    }

    return (
        <div className="add-wish__div">
            <form onSubmit={handleSubmit}>
                <input type="text" name="wishTitle" value={wishTitle} onChange={(e) => { setWishTitle(e.target.value) }} />
            </form>
        </div>
    )
}