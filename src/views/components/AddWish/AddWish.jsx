import { useState } from "react";
import useWishContext from "../../../context/WishContext";
import { localStorage, addWish } from "../../../utils/utils";
import './AddWish.css';
import postTask from "../../../api/postTask";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'
import { useAuth0 } from "@auth0/auth0-react";

export default function AddWish() {
    const { getAccessTokenSilently } = useAuth0();
    const [wishTitle, setWishTitle] = useState({ title: '', status: 0 });
    const [wishList, setWishList] = useWishContext();

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

        const token = await getAccessTokenSilently();
        const { status, msg, data } = await postTask(wishTitle, token);

        if (status === 'TRUE') {
            setWishTitle({ ...wishTitle, title: '' })

            setWishList(prevState => [...prevState, data])

            toast.success('New task added✅', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast.error(msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
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