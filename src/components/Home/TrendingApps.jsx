import { Link } from "react-router";
import AppCard from "../common/AppCard";
import { Suspense } from "react";

const TrendingApps = ({ apps }) => {
    return (
        <div className="bg-[#F5F5F5]  text-black p-10 space-y-5 text-center">
            <p className="text-4xl font-bold">Trending Apps</p>
            <p className="text-gray-500">Explore All Trending Apps on the Market developed by us</p>
            <div className="flex flex-wrap items-center justify-center gap-5">
                {apps.slice(0, 8).map(app => (
                    <Suspense fallback={<p>loading........</p>}>
                        <AppCard app={app} key={app.id}></AppCard>
                    </Suspense>
                ))}
            </div>
            <Link to="/apps" className="btn bg-linear-to-b from-[#632EE3] to-[#9F62F2] border-0">Show All</Link>
        </div>
    );
};

export default TrendingApps;