import { FaCalendarAlt, FaMoneyCheckAlt } from "react-icons/fa";
import { FaBagShopping, FaCartShopping } from "react-icons/fa6";
import { IoHome, IoHomeSharp, IoMenu } from "react-icons/io5";
import { MdPermContactCalendar, MdReviews } from "react-icons/md";
import { RiBookletFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hook/useCart/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-[#D1A054] text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <div className="flex text-xl items-center font-semibold h-10 ps-5 gap-2 mb-4">
                        <img className="w-6" src="/src/assets/assets/logo.png" alt="Logo" />
                        <h1>White Castle</h1>
                    </div>
                    <li>
                        <NavLink to="userhome">
                            <IoHome />
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/reservation">
                            <FaCalendarAlt />
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/payment">
                            <FaMoneyCheckAlt />
                            Payment History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="mycart">
                            <FaCartShopping />
                            My Cart
                            <span className="text-white bg-green-700 rounded px-2 py-1 text-start">
                                {cart?.length}
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/review">
                            <MdReviews />
                            Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/booking">
                            <RiBookletFill />
                            My Booking
                        </NavLink>
                    </li>
                    <hr className="border-2 border-gray-800 w-full" />
                    <li>
                        <NavLink to="/">
                            <IoHomeSharp />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                            <IoMenu />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop/salad">
                            <FaBagShopping />
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <MdPermContactCalendar />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
