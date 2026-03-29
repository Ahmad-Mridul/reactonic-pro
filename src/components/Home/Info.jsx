import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className='bg-white'>
            <img src="hero.png" alt="" className="mx-auto" />
            <div className="space-y-10 text-white text-center bg-linear-to-b from-[#632EE3] to-[#9F62F2] md:p-10 p-5">
                <p className='text-4xl font-bold'>Trusted by Millions, Built for You</p>
                <div className="flex justify-center items-center md:gap-20">
                    <InfoCard title="Total Downloads" number="29.6M" desc="21% more than last month" />
                    <InfoCard title="Total Reviews" number="906K" desc="46% more than last month" />
                    <InfoCard title="Active Apps" number="132+" desc="31 more will Launch" />
                </div>
            </div>
        </div>
    );
};

export default Info;