import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import { Toaster } from "react-hot-toast";

const Main = () => {
    const location = useLocation()
    const noHeaderFotter = location.pathname.includes("/login") || location.pathname.includes("/signup")
    
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            {noHeaderFotter || <Navbar></Navbar>}
            <Outlet />
            {noHeaderFotter || <Footer></Footer>}
            <Toaster />
        </div>
    );
};

export default Main;