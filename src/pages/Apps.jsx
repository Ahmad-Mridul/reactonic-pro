import { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../components/common/AppCard";
import NoAppFound from "../components/Apps/NoAppFound";

const Apps = () => {
    const apps = useLoaderData();
    const [search, SetSearch] = useState("");
    const filteredApp = apps.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="bg-[#F5F5F5] md:p-15 p-5 text-center space-y-3">
            <p className="text-black text-4xl font-bold">Our All Applications</p>
            <p className="text-gray-400">Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className="">
                <div className="flex items-center justify-between text-black">
                    <p className="font-bold">({filteredApp.length}) Apps Found</p>
                    <label className="input bg-white w-55">
                        <svg className="h-[1em] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" defaultValue={search} onChange={(e) => SetSearch(e.target.value)} />
                    </label>
                </div>
                <div className="md:flex md:flex-wrap md:gap-5 gap-3 grid grid-cols-2 md:justify-center md:items-center mt-5">
                    {
                        filteredApp.length > 0 && (
                            filteredApp.map(app => (
                                <Suspense key={app.id} fallback={<p>loading.........</p>}>
                                    <AppCard app={app} />
                                </Suspense>
                            ))
                        )

                    }
                </div>
                <div className="md:flex md:flex-wrap md:gap-5 gap-3 md:justify-center md:items-center mt-5">
                    {
                        filteredApp.length === 0 && (
                            <NoAppFound />
                        )

                    }
                </div>
            </div>
        </div>
    );
};

export default Apps;