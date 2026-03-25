import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-[#001931] p-15">
            <div className="flex justify-between">
                <div className="flex justify-center items-center">
                    <img src="/logo.png" alt="" className="w-10"/>
                    <p>Reactonic Pro</p>
                </div>
                <div className="">
                    <p>Social Links</p>
                    <div className="flex gap-3">
                        <FaXTwitter />
                        <FaLinkedin />
                        <FaFacebookF />
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <p className="text-center">Copyright © 2025 - All right reserved</p>
        </div>
    );
};

export default Footer;