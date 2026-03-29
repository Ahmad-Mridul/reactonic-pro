import Swal from "sweetalert2";

const getItems = () => {
    const data = localStorage.getItem("installedApp");
    return data ? JSON.parse(data) : [];
};

const addToLocalStorage = (id) => {
    const items = getItems();

    if (items.includes(id)) {
        Swal.fire({
            icon: "info",
            title: "Already Installed",
            text: "This app is already installed."
        });
        return;
    }

    const updated = [...items, id];
    localStorage.setItem("installedApp", JSON.stringify(updated));

    Swal.fire({
        icon: "success",
        title: "Installed",
        text: "App installed successfully!"
    });
};

const removeItem = (id) => {
    console.log("item to be removed:",id);
    console.log(typeof id);
    const items = getItems();
    const localItemsIdsNumber=items.map(item=>parseInt(item));
    localItemsIdsNumber.map(item=>console.log(item));
    const updated = localItemsIdsNumber.filter(item => item !== id);

    localStorage.setItem("installedApp", JSON.stringify(updated));
};

export { getItems, addToLocalStorage, removeItem };