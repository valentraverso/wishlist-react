import { useEffect } from "react";
import useWishContext from "../../../context/WishContext";
import { deleteWish, changeWishStatus } from "../../../utils/utils";
import './ListWish.css';

export default function ListWishes() {
    const [wishList, setWishList] = useWishContext();

    useEffect(() => {
        setWishList(JSON.parse(localStorage.getItem("wish-list")));
    }, []);;

    const handleDelete = (id) => {
        deleteWish(id);
        setWishList(JSON.parse(localStorage.getItem("wish-list")));
    }

    const handleComplete = (id) => {
        changeWishStatus(id);
        setWishList(JSON.parse(localStorage.getItem("wish-list")));
    }

    return (
        <section className="list-wishes__section">
            {
                wishList?.length >= 1 ?
                    <div className="list-wishes__div">
                        <h2>Tasks</h2>
                        {
                            wishList.map((item, index) => (
                                <div className="row-list__div" key={index}>
                                    <div className="status-wish__div">
                                        {
                                            item.completed ?
                                                <span className="completed-task__span" onClick={() => handleComplete(item.id)}></span>
                                                :
                                                <span className="uncompleted-task__span" onClick={() => handleComplete(item.id)}></span>
                                        }
                                    </div>
                                    <div className="info-wish__div">
                                        <span>
                                            {item.title}
                                        </span>
                                    </div>
                                    <div className="clear-wish__div">
                                        <span onClick={() => handleDelete(item.id)}>X</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <h1>Please add tasks ☝️</h1>
            }
        </section>
    )
}