import Swal from "sweetalert2";
import { getItems, removeItem } from "../../utils/LocalStorage";

const InstalledApp = ({ app }) => {

    const { id, image, title, downloads, ratingAvg, size } = app;
    const handleUninstall = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, uninstall it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Uninstalled!",
                    text: "Your file has been uninstalled.",
                    icon: "success"
                });
                removeItem(id);
                setTimeout(() => window.location.reload(), 3000);
            }
        });
    }
    return (
        <div className="bg-white p-5 rounded">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img src={image} alt="" className="w-15 rounded" />
                    <div className="text-left space-y-2">
                        <p className="font-bold">{title}</p>
                        <div className="flex gap-5">
                            <div className="flex items-center justify-center gap-2">
                                <img src="/icon-downloads.png" alt="" className="w-4" />
                                <p className="text-green-400">{downloads}</p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <img src="/icon-ratings.png" alt="" className="w-4" />
                                <p className="text-yellow-500">{ratingAvg}</p>
                            </div>
                            <p className="text-gray-500">{size} MB</p>
                        </div>
                    </div>
                </div>
                <button className="btn bg-green-400 border-0 hover:bg-green-500" onClick={() => handleUninstall(id)}>Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledApp;