import { useLoaderData, useParams } from "react-router";
import IconBox from "../components/common/IconBox";
import { RiDownload2Line } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { MdOutlineReviews } from "react-icons/md";
import TinyBarChart from "../components/common/RatingChart";
import { addToLocalStorage } from "../utils/LocalStorage";
import Swal from "sweetalert2";
const AppDetails = () => {
    const { id } = useParams();
    const apps = useLoaderData();
    const singleApp = apps.find(app => app.id === parseInt(id));
    const { title, image, companyName, description, downloads, ratingAvg, reviews, size, ratings } = singleApp;
    const formattedDownloads = downloads
        ? (downloads / 100000) + "M"
        : downloads;
    const formattedReviews = reviews
        ? (reviews / 1000) + "K"
        : reviews;
    const localItemIds = JSON.parse(localStorage.getItem("installedApp")) || [];
    const handleAddtoLocalStorage = () => {
        const localItemIds = JSON.parse(localStorage.getItem("installedApp")) || [];
        if (localItemIds.includes(id)) {
            Swal.fire({
                title: "Sorry",
                text: "App already installed",
                // icon: "success"
            });
            return;
        } else {
            addToLocalStorage(id);

            Swal.fire({
                title: "Yayy",
                text: "App has been installed",
                icon: "success"
            });
        }

    }
    return (
        <div className="p-15 bg-[#F5F5F5] text-black">
            <div className="flex  gap-5">
                <img src={image} alt="" />
                <div className=" flex-1 space-y-3">
                    <p className="font-bold text-2xl">{title}</p>
                    <p>Developed by <span className="text-blue-600">{companyName}</span></p>
                    <div className="border-t border-gray-300 mt-3"></div>
                    <div className="flex gap-5 mt-5">
                        <IconBox icon={<RiDownload2Line />} info="Downloads" number={formattedDownloads} />
                        <IconBox icon={<FaStar />} info="Average Ratings" number={ratingAvg} />
                        <IconBox icon={<MdOutlineReviews />} info="Total Reviews" number={formattedReviews} />
                    </div>
                    <button className={`btn bg-green-400 border-0 hover:bg-green-500 `} onClick={handleAddtoLocalStorage}>{localItemIds.includes(id)?"Installed":"Install Now ({size} MB)"}</button>
                </div>
            </div>
            <div className="border-t border-gray-300 mt-3"></div>
            <p className="text-2xl font-bold">Rating</p>
            <div className="w-full h-75">
                <TinyBarChart ratings={ratings} />
            </div>
            <div className="border-t border-gray-300 mt-3"></div>
            <p className="text-2xl font-bold">Description</p>
            <p style={{ whiteSpace: 'pre-line' }}>{description}</p>
        </div>
    );
};

export default AppDetails;