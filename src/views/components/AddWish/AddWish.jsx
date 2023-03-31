import { useState } from "react";
import { useQuery } from "react-query";
import useWishContext from "../../../context/WishContext";
import { localStorage, addWish } from "../../../utils/utils";
import './AddWish.css';
import postTask from "../../../api/postTask";
import { ToastContainer, toast  } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'

export default function AddWish() {
    const [wishTitle, setWishTitle] = useState({ title: '', status: 0 });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (wishTitle.title === null || wishTitle.title === '') {
            toast.error('Must fill the input with text!😡', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }


        const { status } = await postTask(wishTitle);

        (status === 'Upload') ? 
        setWishTitle({ ...wishTitle, title: '' }) 
        :
        toast.error('There was an error!😭', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <div className="add-wish__div">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <form onSubmit={handleSubmit}>
                <input type="text" name="wishTitle" value={wishTitle.title} placeholder='🖊️ Walk the dog' onChange={(e) => { setWishTitle({ ...wishTitle, title: e.target.value }) }} />
            </form>
        </div>
    )
}