import { createContext, useState, useContext } from "react";

export const WishContext = createContext(null);

export function WishListContext({children}) {
    const [wishList, setWishList] = useState([]);

    return (
        <WishContext.Provider value={[wishList, setWishList]}>
            {children}
        </WishContext.Provider>
    )
}

export default function useWishContext(){
    const [wishList, setWishList] = useContext(WishContext);

    return [wishList, setWishList];
}