import { useState } from "react";
import InstalledApp from "../components/common/InstalledApp";
import { useLoaderData } from "react-router";
import { getItems } from "../utils/LocalStorage";

const Installation = () => {
    const [filterValue, setFilterValue] = useState("");
    const handleOptionValue = e => {
        setFilterValue(e.target.value);
    }

    const allApps = useLoaderData();
    
    
    const localItemIds = getItems();
    
    const numberConvertedIds =  localItemIds.map(id=> parseInt(id))
    
    const matchedItems = allApps.filter(item => numberConvertedIds.includes(item.id));
    console.log("matched: ", matchedItems);
    return (
        <div className="bg-gray-200 text-center text-black p-15 space-y-3">
            <p className="text-2xl font-bold">Your Installed Apps</p>
            <p className="font-thin">Explore All Trending Apps on the Market developed by us</p>
            <div className="">
                <div className="flex text-black justify-between">
                    <p className="font-bold">{matchedItems.length} Apps Found</p>
                    <select name="filter" id="" onChange={handleOptionValue} value={filterValue} className="bg-white p-1 rounded-sm">
                        <option value="">Sort By</option>
                        <option value="size">Size</option>
                        <option value="rating">Rating</option>
                        <option value="downloads">Downloads</option>
                    </select>
                </div>
            </div>
            {
                matchedItems.map(app=><InstalledApp key={app.id} app={app}/>)
            }
        </div>
    );
};

export default Installation;