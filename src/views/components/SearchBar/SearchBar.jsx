import { useEffect, useState } from 'react';
import './SearchBar.css';

export default function SearchBar({ setWishSearch }) {
    const [wishTitle, setWishTitle] = useState("");

    useEffect(() => {
        setWishSearch(wishTitle);
    }, [wishTitle])

    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    return (
        <div className="add-wish__div">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="wishTitle"
                    placeholder='🔍 Search a task'
                    value={wishTitle}
                    onChange={(ev) => setWishTitle(ev.target.value.toLocaleLowerCase())} />
            </form>
        </div>
    )
}