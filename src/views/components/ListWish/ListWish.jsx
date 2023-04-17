import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import useWishContext from "../../../context/WishContext";
import { updateTask, deleteTask, deleteAllTask } from "../../../api";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import './ListWish.css';

export default function ListWishes({ completed, filterBy, filterValue }) {
    const { getAccessTokenSilently } = useAuth0();

    const [wishList, setWishList] = useWishContext();
    const [objFilter, setObjFilter] = useState([]);
    const [msgShow, setMsgShow] = useState({ status: false, msg: '', type: '' });

    useEffect(() => {
        // Set objfilter if the context don't have tasks
        if (wishList === null) {
            setObjFilter([]);
            return;
        }

        // Set object filter with task by completed
        if (completed === false || completed === true) {
            setObjFilter(wishList.filter(item => item.completed === completed))
        }

        // Set object filter by title of the task (Search page)
        if (filterBy !== undefined) {
            if (filterValue === undefined) {
                setObjFilter([]);
                return;
            }


        }

        switch (completed) {
            case true:
                setObjFilter(wishList.filter(item => item.completed === completed && item.status !== 2));
                break;
            case false:
                setObjFilter(wishList.filter(item => item.completed === completed));
                break;
            case "all":
                setObjFilter(wishList.filter(item => item.status !== 2));
                break;
            case "archive":
                setObjFilter(wishList.filter(item => item.status === 2));
                break;
        }
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

        if (!alert) {
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

    const handleEdit = async (ev, id) => {
        const { target: { value } } = ev;
        if (ev.key === 'Enter') {
            if (value.length === 0) {
                setMsgShow({ ...msgShow, status: true, msg: 'Please fill with more than 1 character to the task', type: 'delete' });
                setTimeout(() => {
                    setMsgShow({ ...msgShow, status: false, msg: '', type: '' })
                }, 3000)
            } else {
                const token = await getAccessTokenSilently();
                const { data: { data: newDataTask, msg, status } } = await updateTask(token, id, { title: value });

                const newWishList = await wishList.map(task => {
                    if (task._id === newDataTask._id) {
                        return {
                            ...newDataTask
                        }
                    }
                    return task;
                })

                await setWishList(newWishList);

                if (status === "TRUE") {
                    toast.success(msg)
                } else {
                    toast.error(msg);
                    return;
                }
            }
            return;
        }
    }

    const handleBlur = (ev, title) => {
        ev.target.value = title;
    }

    const handleStatus = async (id, statusTask) => {
        const newStatus = statusTask === 1 ? 2 : 1

        const token = await getAccessTokenSilently();
        const { data: { data: newDataTask, msg, status } } = await updateTask(token, id, { status: newStatus });

        const newWishList = await wishList.map(task => {
            if (task._id === newDataTask._id) {
                return {
                    ...newDataTask
                }
            }
            return task;
        })

        await setWishList(newWishList);

        if (status === "TRUE") {
            toast.success(msg)
        } else {
            toast.error(msg);
            return;
        }
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
                    <h1>There's no task to show🥲</h1>
                    :
                    <div className="list-wishes__div">
                        <h2>Tasks</h2>
                        {
                            objFilter.map((item) => (
                                <div className="row-list__div" key={item._id}>
                                    <div className="status-wish__div">
                                        {
                                            item.status !== 2 &&
                                            <span
                                                className={!item.completed ? "uncompleted-task__span" : "completed-task__span"}
                                                onClick={() => handleComplete(item._id, item.completed)} />
                                        }
                                    </div>
                                    <div className="info-wish__div">
                                        <input className={item.completed ? 'change-wish-title__input line-through__span' : 'change-wish-title__input'}
                                            defaultValue={item.title}
                                            onChange={(ev) => handleEdit(ev, item._id)}
                                            onKeyDown={(ev) => handleEdit(ev, item._id)}
                                            onBlur={(ev) => handleBlur(ev, item.title)}
                                            type='text' />
                                    </div>
                                    <div className="clear-wish__div">
                                        {
                                            item.completed &&
                                            <span onClick={() => handleStatus(item._id, item.status)}>
                                                {
                                                    item.status === 1 ?
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m21.706 5.292-2.999-2.999A.996.996 0 0 0 18 2H6a.996.996 0 0 0-.707.293L2.294 5.292A.994.994 0 0 0 2 6v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6a.994.994 0 0 0-.294-.708zM6.414 4h11.172l1 1H5.414l1-1zM4 19V7h16l.002 12H4z"></path><path d="M14 9h-4v3H7l5 5 5-5h-3z"></path></svg>
                                                        :
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m21.706 5.292-2.999-2.999A.996.996 0 0 0 18 2H6a.996.996 0 0 0-.707.293L2.294 5.292A.994.994 0 0 0 2 6v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6a.994.994 0 0 0-.294-.708zM6.414 4h11.172l1 1H5.414l1-1zM4 19V7h16l.002 12H4z"></path><path d="M7 14h3v3h4v-3h3l-5-5z"></path></svg>
                                                }
                                            </span>
                                        }
                                        <span onClick={() => handleDelete(item._id)}>X</span>
                                    </div>
                                </div>
                            ))
                        }
                        <div className='footer-task-list__div'>
                            <p className="task-count__p">Tasks: {objFilter.length}</p>
                            {
                                completed === 'all' ?
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