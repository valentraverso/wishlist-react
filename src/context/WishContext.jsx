import { createContext, useState, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import { fetchAllTask } from "../api/tasks/fetchAllTask";

export const WishContext = createContext(null);

export function WishListContext({ children }) {
    const { getAccessTokenSilently } = useAuth0();
    const [wishList, setWishList] = useState([]);

    useQuery(['task'], async () => {
        const token = await getAccessTokenSilently();
        const { data } = await fetchAllTask(token);

        setWishList(data);
    })

    return (
        <WishContext.Provider value={[wishList, setWishList]}>
            {children}
        </WishContext.Provider>
    )
}

export default function useWishContext() {
    const [wishList, setWishList] = useContext(WishContext);

    return [wishList, setWishList];
}