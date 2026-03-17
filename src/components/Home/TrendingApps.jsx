import AppCard from "../common/AppCard";

const TrendingApps = ({apps}) => {
    return (
        <div className="bg-white text-center text-black p-10 space-y-5">
            <p className="text-4xl font-bold">Trending Apps</p>
            <p className="text-gray-500">Explore All Trending Apps on the Market developed by us</p>
            <div className="flex flex-wrap items-center justify-center">
                {apps.map(app=><AppCard app={app} key={app.id}></AppCard>)}
            </div>
        </div>
    );
};

export default TrendingApps;