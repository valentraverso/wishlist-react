const localStorage = window.localStorage;

const addWish = (text) => {
    const getStorage = localStorage.getItem("wish-list");

    if (getStorage === null) {
        const newWish = [
            {
                id: 1,
                title: text,
                completed: false,
            },
        ]

        localStorage.setItem("wish-list", JSON.stringify(newWish));
    } else {
        const JSONStorage = JSON.parse(getStorage);

        const lastWish = JSONStorage.slice(-1);

        const newWish = {
            id: lastWish[0].id + 1,
            title: text,
            completed: false,
        }


        JSONStorage.push(newWish);

        localStorage.setItem("wish-list", JSON.stringify(JSONStorage));
    }
}

const getWishList = () => {
    const JSONStorage = JSON.parse(localStorage.getItem("wish-list"));
}

const deleteWish = (id) => {
    const JSONStorage = JSON.parse(localStorage.getItem("wish-list"));

    const newWishList = [];

    JSONStorage.map(item => {
        if (item.id === id) {
            return;
        }

        newWishList.push(item);
    })

    if (newWishList.length > 0) {
        localStorage.setItem("wish-list", JSON.stringify(newWishList));
    } else {
        localStorage.removeItem("wish-list");
    }

    return newWishList;
}

const changeWishStatus = (id) => {
    const JSONStorage = JSON.parse(localStorage.getItem("wish-list"));

    const newWishList = [];

    JSONStorage.map(item => {
        if (item.id === id) {
            switch (item.completed) {
                case false:
                    newWishList.push({ ...item, completed: true });
                    break;
                case true:
                    newWishList.push({ ...item, completed: false });
                    break;
            }

            return;
        }

        newWishList.push(item);
    })

    localStorage.setItem("wish-list", JSON.stringify(newWishList));

    return newWishList;
}

const editWish = (id, text) => {
    const JSONStorage = JSON.parse(localStorage.getItem("wish-list"));

    const newWishList = [];

    JSONStorage.map(item => {
        if (item.id === id) {

            newWishList.push({ ...item, title: text });

            return;
        }

        newWishList.push(item);
    })

    localStorage.setItem("wish-list", JSON.stringify(newWishList));

    return newWishList;
}

const deleteAllWish = () => {
    const JSONStorage = JSON.parse(localStorage.getItem("wish-list"));

    const filter = JSONStorage.filter(item => item.completed !== true);

    if (filter.length === 0) {
        localStorage.removeItem("wish-list");
        return;
    } else {
        localStorage.removeItem("wish-list");
        localStorage.setItem("wish-list", JSON.stringify(filter));
    }

    return filter;
}

export { localStorage, addWish, getWishList, deleteWish, changeWishStatus, editWish, deleteAllWish };