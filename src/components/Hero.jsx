import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoIosAppstore } from "react-icons/io";
const Hero = () => {
    return (
        <div className='p-10 space-y-5 bg-white text-gray-500 text-center'>
            <p className='capitalize text-center text-6xl font-bold text-[#001931]'>we build <br /> <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> apps</p>
            <p className='text-center w-[75%] mx-auto'>At Reactonic Pro , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className="text-center flex items-center gap-5 justify-center">
                <button className='btn btn-outline text-xl text-black'><IoLogoGooglePlaystore /> Google Play</button>
                <button className='btn btn-outline text-xl text-black'><IoIosAppstore /> App Store</button>
            </div>
            <img src="hero.png" alt="" className="mx-auto"/>
        </div>
    );
};

export default Hero;