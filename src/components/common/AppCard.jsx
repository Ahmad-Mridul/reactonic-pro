import { FaStar } from "react-icons/fa6";
import { GrDownload } from "react-icons/gr";
import { Link } from "react-router";
const AppCard = ({ app }) => {
    const { image, title, downloads, ratingAvg, id } = app;

    const formattedDownloads = downloads
        ? (downloads / 100000) + "M"
        : downloads;
    return (
        <Link to={`/app-details/${id}`}>
            <div className="p-2 bg-white shadow rounded space-y-1">
                <img src={image} alt="" className="rounded" />
                <p className="text-left text-black">{title}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center gap-1 bg-[#F1F5E8] p-1 rounded text-[#00D390]">
                        <GrDownload /><p>{formattedDownloads}</p>
                    </div>
                    <div className="flex items-center justify-center gap-1 bg-[#FFF0E1] p-1 rounded text-[#FF8811]">
                        <FaStar /><p>{ratingAvg}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;