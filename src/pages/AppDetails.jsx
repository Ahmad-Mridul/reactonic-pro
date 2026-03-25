import { useLoaderData, useParams } from "react-router";
import IconBox from "../components/common/IconBox";
import { RiDownload2Line } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { MdOutlineReviews } from "react-icons/md";
import TinyBarChart from "../components/common/RatingChart";
const AppDetails = () => {
    const { id } = useParams();
    const apps = useLoaderData();
    const singleApp = apps.find(app => app.id === parseInt(id));
    const { title, image, companyName, description, downloads, ratingAvg, reviews, size, ratings } = singleApp;
    return (
        <div className="p-15 bg-[#F5F5F5] text-black">
            <div className="flex  gap-3">
                <img src={image} alt="" />
                <div className=" flex-1 space-y-3">
                    <p className="font-bold text-2xl">{title}</p>
                    <p>Developed by <span className="text-blue-600">{companyName}</span></p>
                    <div className="border-t border-gray-300 mt-3"></div>
                    <div className="flex gap-3 mt-5">
                        <IconBox icon={<RiDownload2Line />} info="Downloads" number="8M"/>
                        <IconBox icon={<FaStar />} info="Average Ratings" number="4.9"/>
                        <IconBox icon={<MdOutlineReviews />} info="Total Reviews" number="54K"/>
                    </div>
                    <button className="btn bg-green-400 border-0 hover:bg-green-500">Install Now ({size} MB)</button>
                </div>
            </div>
            <div className="border-t border-gray-300 mt-3"></div>
            <p className="text-2xl font-bold">Rating</p>
            <TinyBarChart ratings={ratings}/>
            <div className="border-t border-gray-300 mt-3"></div>
            <p className="text-2xl font-bold">Description</p>
            <p>{description}</p>
        </div>
    );
};

export default AppDetails;