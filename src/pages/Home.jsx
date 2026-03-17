import { useLoaderData } from "react-router";
import Hero from "../components/Home/Hero";
import Info from "../components/Home/Info";
import TrendingApps from "../components/Home/TrendingApps";

const Home = () => {
    const apps = useLoaderData();
    return (
        <div>
            <Hero/>
            <Info/>
            <TrendingApps apps={apps}/>
        </div>
    );
};

export default Home;