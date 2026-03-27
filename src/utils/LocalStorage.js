import Swal from "sweetalert2";

const getItems = () => {
    const allItems = localStorage.getItem("installedApp") || [];
    return JSON.parse(allItems);
}

const localItemIds = JSON.parse(localStorage.getItem("installedApp")) || [];
const addToLocalStorage = (id) => {
    // if (localItemIds.includes(id)) {
    //     // Swal.fire({
    //     //     title: "Already in installed",
    //     //     // text: "You clicked the button!",
    //     // });
    //     alert("already installed");
    //     return;
    // }
    const newItemIds = [...localItemIds, id];
    localStorage.setItem("installedApp", JSON.stringify(newItemIds));
}
export { getItems, addToLocalStorage };