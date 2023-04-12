import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useWishContext from "../../../context/WishContext";
import { useAuth0 } from "@auth0/auth0-react";
import { deleteWish, changeWishStatus, localStorage, editWish, deleteAllWish } from "../../../utils/utils";
import { toast } from "react-toastify";
import './ListWish.css';
import { updateTask, deleteTask, deleteAllTask } from "../../../api";
import Swal from "sweetalert2";

export default function ListWishes({ completed }) {
    const { getAccessTokenSilently } = useAuth0();

    const [wishList, setWishList] = useWishContext();
    const [objFilter, setObjFilter] = useState([]);
    const [msgShow, setMsgShow] = useState({ status: false, msg: '', type: '' });

    const [actualValue, setActualValue] = useState('');

    useEffect(() => {
        if (wishList === null) {
            setObjFilter([]);
            return;
        }

        completed === false || completed === true ?
            setObjFilter(wishList.filter(item => item.completed === completed))
            :
            setObjFilter(wishList)
    }, [wishList]);

    const handleDelete = async (id) => {
        const token = await getAccessTokenSilently();
        const { data: { status, msg } } = await deleteTask(token, id);

        if (status === "TRUE") {
            toast.success(msg)
        } else {
            toast.error(msg);
            return;
        }

        setWishList(wishList.filter(item => item._id !== id));
    }

    const handleComplete = async (id, completed) => {
        const token = await getAccessTokenSilently();
        const { data: { data: newDataTask, msg, status } } = await updateTask(token, id, { completed: !completed });

        const newWishList = wishList.map(task => {
            if (task._id === newDataTask._id) {
                return {
                    ...newDataTask
                }
            }
            return task;
        })

        if (status === "FALSE") {
            toast.error(msg);
            return;
        }

        setWishList(newWishList);
    }

    const handleDeleteAll = async () => {
        const alert = await Swal.fire({
            title: 'Do you want to delete all tasks?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Yes, please.',
            denyButtonText: 'Cancel',
            customClass: {
                actions: 'my-actions',
                confirmButton: 'order-2',
                denyButton: 'order-3',
            }
        })
        .then((result) => {
            if (result.isConfirmed) {
                Swal.showLoading();
                return true;
            } else if (result.isDenied) {
                return false;
            }
        })

        if(!alert){
            return;
        }

        const token = await getAccessTokenSilently();
        const { data: { msg, status } } = await deleteAllTask(token);

        if (status === "TRUE") {
            toast.success(msg)
        } else {
            toast.error(msg);
            return;
        }

        await setWishList([]);

        Swal.close();
    }

    const handleEdit = (ev, id) => {
        if (ev.key === 'Enter') {
            if (actualValue.length === 0) {
                setMsgShow({ ...msgShow, status: true, msg: 'Please fill with more than 1 character to the task', type: 'delete' });
                setTimeout(() => {
                    setMsgShow({ ...msgShow, status: false, msg: '', type: '' })
                }, 3000)
            } else {
                const objEdit = editWish(id, actualValue);

                setWishList(objEdit);

                ev.target.blur();
                ev.target.value = actualValue;
            }
            return;
        }

        setActualValue(ev.target.value);
    }

    const handleBlur = (ev, title) => {
        ev.target.value = title;
    }

    return (
        <section className="list-wishes__section">
            {
                msgShow.status ??
                <div className={`msg-${msgShow.type}__div`}>
                    <p>{msgShow.msg}</p>
                </div>
            }
            {
                objFilter?.length === 0 || objFilter?.length === undefined ?
                    <h1>Theres no active Task 🥲</h1>
                    :
                    <div className="list-wishes__div">
                        <h2>Tasks</h2>
                        {
                            objFilter.map((item) => (
                                <div className="row-list__div" key={item._id}>
                                    <div className="status-wish__div">
                                        <span
                                            className={!item.completed ? "uncompleted-task__span" : "completed-task__span"}
                                            onClick={() => handleComplete(item._id, item.completed)} />
                                    </div>
                                    <div className="info-wish__div">
                                        <input className={item.completed ? 'change-wish-title__input line-through__span' : 'change-wish-title__input'}
                                            defaultValue={item.title}
                                            onChange={(ev) => handleEdit(ev, item.id)}
                                            onKeyDown={(ev) => handleEdit(ev, item.id)}
                                            onBlur={(ev) => handleBlur(ev, item.title)}
                                            type='text' />
                                    </div>
                                    <div className="clear-wish__div">
                                        <span onClick={() => handleDelete(item._id)}>X</span>
                                    </div>
                                </div>
                            ))
                        }
                        <div className='footer-task-list__div'>
                            <p className="task-count__p">Tasks: {objFilter.length}</p>
                            {
                                completed === 'all'?
                                    <span className='delete-all__span' onClick={handleDeleteAll}>
                                        Delete all
                                    </span>
                                    : 
                                    null
                            }
                        </div>
                    </div>
            }
        </section>
    )
}