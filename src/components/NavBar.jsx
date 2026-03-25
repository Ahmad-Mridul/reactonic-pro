import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
const NavBar = () => {
    const links = <>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/apps"><li>Apps</li></NavLink>
        <NavLink to="/installation"><li>Installation</li></NavLink>
    </>
    return (
        <>
            <div className="navbar bg-white text-black shadow-sm md:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow ">
                            {links}
                        </ul>
                    </div>
                    <a href="/" className="btn btn-ghost text-xl"><img src="/logo.png" alt="" className="w-10" />Reactonic Pro</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 flex justify-center items-center">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn border-0 bg-linear-to-r from-[#632EE3] to-[#9F62F2] "><FaGithub />Contribute</Link>
                </div>
            </div>
        </>
    );
};

export default NavBar;