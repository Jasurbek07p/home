import { useContext, useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import useCart from "../../hook/useCart/useCart";

const Navbar = () => {
    const [cart] = useCart(); // Cart data loaded by custom hook
    const { user, logout } = useContext(AuthContext);
    const profileImage = user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
    
    // Dark mode state
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "enabled");

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleLogOut = () => {
        logout().then(() => {
            toast.success('Logout successfully.', { position: "bottom-center" });
        }).catch((error) => {
            toast.error(error.message, { position: "bottom-center" });
        });
    };

    const navOptions = (
        <>
            <li><Link to={'/'}>HOME</Link></li>
            <li><a>DASHBOARD</a></li>
            <li><Link to="menu">OUR MENU</Link></li>
            <li><Link to="shop/salad">OUR SHOP</Link></li>
            <li>
                <Link to={'/dashboard/mycart'}>
                    <AiOutlineShoppingCart className="text-2xl relative" />
                    <p className="absolute md:top-[-5px] left-[40px] md:left-auto md:right-[-20px] bg-white text-black p-1 md:w-9 text-center rounded-md font-semibold">{cart.length}</p>
                </Link>
            </li>
        </>
    );

    return (
        <div style={{ background: 'rgba(21, 21, 21, 0.50)' }} className="navbar text-white fixed z-10 max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul style={{ background: 'rgba(21, 21, 21, 0.50)' }} tabIndex={0} className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-sm md:text-[20px]">WHITE CASTLE <br /> RESTAURANT</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end me-5 space-x-2">
                <button onClick={toggleDarkMode} className="btn btn-outline text-white">
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
                {!user && <Link to={'/login'}><button className="btn btn-outline text-white">Login</button></Link>}
                <Link to={'/signup'}><button className="btn btn-outline text-white">Sign Up</button></Link>
                {user && (
                    <div className="flex gap-2">
                        <Link>
                            <button onClick={handleLogOut} className="btn btn-outline text-white">Sign Out</button>
                        </Link>
                        <div className="avatar w-12">
                            <div className="ring-offset-base-100 rounded-full object-cover">
                                <Link to={'/profile'}>
                                    <img src={profileImage} alt="Profile" />
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
