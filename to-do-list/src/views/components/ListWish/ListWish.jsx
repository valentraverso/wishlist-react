import { useEffect, useState } from "react";
import useWishContext from "../../../context/WishContext";
import { deleteWish, changeWishStatus, localStorage } from "../../../utils/utils";
import './ListWish.css';

export default function ListWishes({completed}) {
    const [wishList, setWishList] = useWishContext();
    const [objFilter, setObjFilter] = useState([]);
    const [msgShow, setMsgShow] = useState({status: false, msg: '', type: ''});

    useEffect(() => {
        const wishObj = JSON.parse(localStorage.getItem("wish-list"));

        completed !== undefined ?
        setObjFilter(wishObj.filter(item => item.completed === completed))
        :
        setObjFilter(wishObj)
    }, [wishList]);

    const handleDelete = (id) => {
        const objDelete = deleteWish(id);
        setWishList(objDelete);

        setMsgShow({...msgShow, status: true, msg: 'Task deleted', type: 'delete'})
        setTimeout(() => {
            setMsgShow({...msgShow, status: false, msg: '', type: ''})
        }, 3000)
    }

    const handleComplete = (id) => {
        const objChange = changeWishStatus(id);
        setWishList(objChange);
    }

    console.log(objFilter)

    return (
        <section className="list-wishes__section">
            {
                msgShow.status ?
                    <div className={`msg-${msgShow.type}__div`}>
                        <p>{msgShow.msg}</p>
                    </div>
                : 
                null
            }
            {
                objFilter?.length === 0 ?
                    <h1>Theres no active Task 🥲</h1>
                    :
                    <div className="list-wishes__div">
                        <h2>Tasks</h2>
                        {
                            objFilter.map((item) => (
                                <div className="row-list__div" key={item.id}>
                                    <div className="status-wish__div">
                                        {
                                            item.completed ?
                                                <span className="completed-task__span" onClick={() => handleComplete(item.id)}></span>
                                                :
                                                <span className="uncompleted-task__span" onClick={() => handleComplete(item.id)}></span>
                                        }
                                    </div>
                                    <div className="info-wish__div">
                                        <input className="change-wish-title__input" defaultValue={item.title} type='text' />
                                    </div>
                                    <div className="clear-wish__div">
                                        <span onClick={() => handleDelete(item.id)}>X</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            }
        </section>
    )
}