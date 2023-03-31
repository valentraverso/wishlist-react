import { useState } from "react";
import { useQuery } from "react-query";
import useWishContext from "../../../context/WishContext";
import { localStorage, addWish } from "../../../utils/utils";
import './AddWish.css';
import postTask from "../../../api/postTask";

export default function AddWish() {
    const [wishTitle, setWishTitle] = useState({ title: '', status: 0 });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (wishTitle.title === null || wishTitle.title === '') {
            alert('Must fill the input with text!');
            return;
        }


        const { status } = await postTask(wishTitle);

        (status === 'Upload') && setWishTitle({...wishTitle, title: ''});
    }

    return (
        <div className="add-wish__div">
            <form onSubmit={handleSubmit}>
                <input type="text" name="wishTitle" value={wishTitle.title} placeholder='🖊️ Walk the dog' onChange={(e) => { setWishTitle({ ...wishTitle, title: e.target.value }) }} />
            </form>
        </div>
    )
}